import React, { useState } from 'react';
import { BookOpen, Award, MessageSquare, Volume2, CheckCircle2, Mic, ArrowLeft, BookOpenCheck, Brain, Lightbulb, Target, Book, MessageCircle, PlayCircle, FileText, Home, RefreshCw } from 'lucide-react';

type Section = 'home' | 'vocabulary' | 'phrasal-verbs' | 'idioms' | 'speaking' | 'reading' | 'sentence' | 'feedback' | 'more-vocabulary' | 'pronunciation';

type VocabularyCard = {
  id: number;
  word: string;
  definition: string;
  example: string;
  image: string;
  pronunciation?: string;
};

const vocabularyCards: VocabularyCard[] = [
  {
    id: 1,
    word: 'Serendipity',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way',
    example: 'Finding her dream job while on vacation was pure serendipity.',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'ser·en·dip·i·ty'
  },
  {
    id: 2,
    word: 'Ephemeral',
    definition: 'Lasting for a very short time',
    example: 'The beauty of cherry blossoms is ephemeral, lasting only a few days.',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'ih·fem·ruh·l'
  },
  {
    id: 3,
    word: 'Mellifluous',
    definition: 'Sweet or musical; pleasant to hear',
    example: 'Her mellifluous voice captivated the entire audience.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'muh·lif·loo·us'
  },
  {
    id: 4,
    word: 'Quintessential',
    definition: 'Representing the most perfect or typical example of a quality or class',
    example: 'The small café was the quintessential Parisian experience.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'kwin·tuh·sen·shul'
  },
  {
    id: 5,
    word: 'Ethereal',
    definition: 'Extremely delicate and light in a way that seems not to be of this world',
    example: 'The morning mist gave the landscape an ethereal quality.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'ih·theer·ee·ul'
  },
  {
    id: 6,
    word: 'Luminescent',
    definition: 'Emitting light not caused by heat; glowing',
    example: 'The luminescent jellyfish created a magical display in the dark waters.',
    image: 'https://images.unsplash.com/photo-1508182314998-3bd49473002f?auto=format&fit=crop&q=80&w=400',
    pronunciation: 'loo·muh·nes·unt'
  }
];

function VocabularyCard({ card }: { card: VocabularyCard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSentence, setShowSentence] = useState(false);

  return (
    <div 
      className="card hover-scale"
      onClick={() => !showSentence && setIsFlipped(!isFlipped)}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-full">
            <img
              src={card.image}
              alt={card.word}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{card.word}</h3>
              {card.pronunciation && (
                <p className="text-gray-200 mt-1">{card.pronunciation}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="card-back bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-full p-6 flex flex-col">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.word}</h3>
              <p className="text-gray-700 mb-4">{card.definition}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSentence(!showSentence);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showSentence ? 'Hide Example' : 'Show Example'}
              </button>
              <div className={`sentence-reveal mt-4 ${showSentence ? 'expanded' : ''}`}>
                <p className="text-gray-600 italic">{card.example}</p>
              </div>
            </div>
            <div className="relative z-10 mt-4 flex justify-center gap-4">
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
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('vocabulary');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vocabulary Cards</h2>
          <p className="text-xl text-gray-600">Master these advanced words to enhance your English proficiency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vocabularyCards.map((card) => (
            <VocabularyCard key={card.id} card={card} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;