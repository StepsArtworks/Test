import React, { useState } from 'react';
import { BookOpen, Award, MessageSquare, Volume2, CheckCircle2, Mic, ArrowLeft, BookOpenCheck, Brain, Lightbulb, Target, Book, MessageCircle, PlayCircle, FileText, Home } from 'lucide-react';

type Section = 'home' | 'vocabulary' | 'phrasal-verbs' | 'idioms' | 'speaking' | 'reading' | 'sentence' | 'feedback' | 'more-vocabulary' | 'pronunciation';

type VocabularyCard = {
  id: number;
  word: string;
  definition: string;
  example: string;
  image: string;
  pronunciation?: string;
};

type PhrasalVerb = {
  verb: string;
  definition: string;
  example: string;
};

type Idiom = {
  phrase: string;
  meaning: string;
  example: string;
};

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [feedback, setFeedback] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [progress, setProgress] = useState(60);
  const [showTutorial, setShowTutorial] = useState(true);
  const [customVocabulary, setCustomVocabulary] = useState<VocabularyCard[]>([]);
  const [newWord, setNewWord] = useState({ word: '', definition: '', example: '' });

  const vocabularyCards: VocabularyCard[] = [
    {
      id: 1,
      word: 'perseverance',
      definition: 'steady persistence in a course of action despite difficulties',
      example: 'Her perseverance in the face of adversity led to her ultimate success.',
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=400',
      pronunciation: 'per·suh·veer·uhns'
    },
    {
      id: 2,
      word: 'resilience',
      definition: 'the capacity to recover quickly from difficulties',
      example: 'The team showed great resilience by bouncing back after several setbacks.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400',
      pronunciation: 'ri·zil·yuhns'
    },
    {
      id: 3,
      word: 'determination',
      definition: 'firmness of purpose; resoluteness',
      example: 'With determination, she worked towards her goals every single day.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400',
      pronunciation: 'duh·tur·muh·ney·shuhn'
    },
    {
      id: 4,
      word: 'ambition',
      definition: 'a strong desire to achieve success',
      example: 'His ambition drove him to pursue higher education despite the challenges.',
      image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=400',
      pronunciation: 'am·bi·shuhn'
    },
    {
      id: 5,
      word: 'diligence',
      definition: 'careful and persistent work or effort',
      example: 'Through diligence and dedication, she mastered the new programming language.',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=400',
      pronunciation: 'dil·uh·juhns'
    }
  ];

  const phrasalVerbs: PhrasalVerb[] = [
    {
      verb: 'push through',
      definition: 'to continue despite difficulties',
      example: 'Despite feeling exhausted, she pushed through to complete the project.',
    },
    {
      verb: 'keep up with',
      definition: 'to maintain the same level or speed as someone or something',
      example: 'It\'s important to keep up with the latest industry trends.',
    },
    {
      verb: 'work on',
      definition: 'to improve or develop something',
      example: 'She decided to work on her presentation skills.',
    }
  ];

  const idioms: Idiom[] = [
    {
      phrase: "The sky's the limit",
      meaning: "There's no limit to what someone can achieve",
      example: "With your talent and dedication, the sky's the limit for your career.",
    },
    {
      phrase: "Put your best foot forward",
      meaning: "To make the best possible effort",
      example: "In every interview, remember to put your best foot forward.",
    },
    {
      phrase: "Go the extra mile",
      meaning: "To make more effort than is expected",
      example: "She always goes the extra mile in her work, which is why she's so successful.",
    }
  ];

  const handleAddCustomWord = () => {
    if (newWord.word && newWord.definition && newWord.example) {
      setCustomVocabulary([...customVocabulary, {
        id: customVocabulary.length + 1,
        ...newWord,
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400'
      }]);
      setNewWord({ word: '', definition: '', example: '' });
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'vocabulary', label: 'Vocabulary', icon: BookOpen },
    { id: 'phrasal-verbs', label: 'Phrasal Verbs', icon: Book },
    { id: 'idioms', label: 'Idioms', icon: MessageCircle },
    { id: 'speaking', label: 'Speaking', icon: PlayCircle },
    { id: 'reading', label: 'Reading', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Advanced English Learning
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Vocabulary Section */}
        {activeSection === 'vocabulary' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Vocabulary</h2>
              <p className="text-lg text-gray-600">Master these essential words for professional success</p>
            </div>

            {/* Add Custom Word Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Add Custom Word</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Word"
                  value={newWord.word}
                  onChange={(e) => setNewWord({...newWord, word: e.target.value})}
                  className="rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Definition"
                  value={newWord.definition}
                  onChange={(e) => setNewWord({...newWord, definition: e.target.value})}
                  className="rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  placeholder="Example"
                  value={newWord.example}
                  onChange={(e) => setNewWord({...newWord, example: e.target.value})}
                  className="rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <button
                onClick={handleAddCustomWord}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Word
              </button>
            </div>

            {/* Vocabulary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...vocabularyCards, ...customVocabulary].map((card) => (
                <div key={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.word}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{card.word}</h3>
                      {card.pronunciation && (
                        <span className="text-sm text-gray-500">{card.pronunciation}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{card.definition}</p>
                    <p className="text-sm text-gray-500 italic mb-4">{card.example}</p>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                        <Volume2 className="w-5 h-5" />
                        <span>Listen</span>
                      </button>
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                        <Mic className="w-5 h-5" />
                        <span>Practice</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phrasal Verbs Section */}
        {activeSection === 'phrasal-verbs' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Phrasal Verbs</h2>
              <p className="text-lg text-gray-600">Essential expressions for natural conversation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phrasalVerbs.map((verb, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{verb.verb}</h3>
                  <p className="text-gray-600 mb-4">{verb.definition}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{verb.example}</p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Volume2 className="w-5 h-5" />
                      <span>Listen</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Mic className="w-5 h-5" />
                      <span>Practice</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Idioms Section */}
        {activeSection === 'idioms' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Idioms and Expressions</h2>
              <p className="text-lg text-gray-600">Master these common English expressions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {idioms.map((idiom, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{idiom.phrase}</h3>
                  <p className="text-gray-600 mb-4">{idiom.meaning}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{idiom.example}</p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Volume2 className="w-5 h-5" />
                      <span>Listen</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Mic className="w-5 h-5" />
                      <span>Practice</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other sections remain unchanged */}
      </main>
    </div>
  );
}

export default App;