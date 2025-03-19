'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useMemo } from 'react';


// Game 1: Jumping Box Game
const JumpingBoxGame = () => {
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const obstacleRef = useRef<HTMLDivElement | null>(null);

  const jump = useCallback(() => {
    if (!isJumping && !gameOver) {
      setIsJumping(true);
      if (boxRef.current) {
        (boxRef.current as HTMLDivElement).style.bottom = '100px';
        setTimeout(() => {
          if (boxRef.current) {
            (boxRef.current as HTMLDivElement).style.bottom = '0px';
            setIsJumping(false);
          }
        }, 500);
      }
    }
  }, [isJumping, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {  // Explicitly define the type of e as KeyboardEvent
      if (e.code === 'KeyJ' && !isJumping && !gameOver) {
        jump();
      }
      if (gameOver && e.code === 'KeyJ') {
        setGameOver(false);
        setScore(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump, isJumping, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const checkCollision = () => {
      if (boxRef.current && obstacleRef.current) {
        const boxRect = boxRef.current.getBoundingClientRect();
        const obstacleRect = obstacleRef.current.getBoundingClientRect();
      
        if (
          boxRect.right > obstacleRect.left &&
          boxRect.left < obstacleRect.right &&
          boxRect.bottom > obstacleRect.top
        ) {
          setGameOver(true);
        }
      }
    };

    const scoreInterval = setInterval(() => {
      if (!gameOver) {
        setScore((prev) => prev + 1);
        checkCollision();
      }
    }, 100);

    return () => clearInterval(scoreInterval);
  }, [gameOver]);

  return (
    <div className="relative w-[600px] h-[200px] mx-auto bg-black/30 rounded-lg overflow-hidden border-2 border-custom-orange/50">
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
      Press &apos;J&apos; to Jump!
    </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-custom-orange/20" />
      <div
        ref={boxRef}
        className="absolute w-[30px] h-[30px] bg-custom-orange rounded-lg"
        style={{
          bottom: 0,
          left: '50px',
          transition: 'bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      <div
        ref={obstacleRef}
        className="absolute w-[20px] h-[40px] bg-custom-orange/50 rounded-lg"
        style={{
          bottom: 0,
          animation: gameOver ? 'none' : 'moveObstacle 2s linear infinite'
        }}
      />
      <div className="absolute top-4 right-4 text-white text-xl">Score: {score}</div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
          <h3 className="text-2xl text-white mb-4">Game Over!</h3>
          <p className="text-custom-orange">Press &apos;J&apos; to restart</p>
          <p className="text-white mt-2">Final Score: {score}</p>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes moveObstacle {
          from { right: 0; }
          to { right: 600px; }
        }
      `}</style>
    </div>
  );
};

// Game 2: Color Matching Game
const ColorMatchingGame = () => {
  const [score, setScore] = useState(0);
  const [targetColor, setTargetColor] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const generateColors = () => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
      '#D4A5A5', '#9B59B6', '#3498DB', '#E67E22', '#2ECC71'
    ];
    const target = colors[Math.floor(Math.random() * colors.length)];
    // Ensure the target color is included in the options
    const otherColors = colors.filter(color => color !== target);
    const shuffled = [...otherColors].sort(() => Math.random() - 0.5).slice(0, 3);
    const finalOptions = [...shuffled, target].sort(() => Math.random() - 0.5);
    setTargetColor(target);
    setOptions(finalOptions);
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleColorClick = (color: string) => {
    if (color === targetColor) {
      setScore(prev => prev + 1);
      generateColors();
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="relative w-full h-[300px] bg-black/30 rounded-lg overflow-hidden p-4 border-2 border-custom-orange/50">
      <div className="text-center mb-4">
        <h3 className="text-white text-xl mb-2">Match the Color</h3>
        <div
          className="w-16 h-16 mx-auto rounded-lg mb-4"
          style={{ backgroundColor: targetColor }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-[320px] mx-auto">
        {options.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(color)}
            className="w-full h-12 rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="absolute top-4 right-4 text-white text-xl">
        Score: {score}
      </div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <h3 className="text-2xl text-white mb-4">Game Over!</h3>
            <button
              onClick={() => {
                setGameOver(false);
                setScore(0);
                generateColors();
              }}
              className="bg-custom-orange text-white px-4 py-2 rounded-lg hover:bg-custom-orange/90"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Game 3: Memory Card Game
const MemoryCardGame = () => {
  const [cards, setCards] = useState<Array<{ id: number; value: string; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  const emojis = useMemo(() => ['🎮', '🎲', '🎯', '🎨'], []);// 4 pairs of emojis

  useEffect(() => {
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }));
    setCards(gameCards);
  }, [emojis]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];
      const secondCard = cards[id];

      if (firstCard.value === secondCard.value) {
        setTimeout(() => {
          const matchedCards = cards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true }
              : card
          );
          setCards(matchedCards);
          setFlippedCards([]);
          setScore(prev => prev + 1);

          if (matchedCards.every(card => card.isMatched)) {
            setGameOver(true);
          }
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = cards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="relative w-full h-[300px] bg-black/30 rounded-lg overflow-hidden p-4 border-2 border-custom-orange/50">
      <div className="grid grid-cols-4 gap-4 max-w-[400px] mx-auto mt-6">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-lg text-2xl transition-all duration-300 w-[70px] h-[70px] flex items-center justify-center ${
              card.isFlipped || card.isMatched
                ? 'bg-custom-orange'
                : 'bg-custom-orange/20 hover:bg-custom-orange/30'
            }`}
          >
            {(card.isFlipped || card.isMatched) && card.value}
          </button>
        ))}
      </div>
      <div className="absolute top-4 right-4 text-white text-xl">
        Score: {score}
      </div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <h3 className="text-2xl text-white mb-4">Congratulations!</h3>
            <button
              onClick={() => {
                setGameOver(false);
                setScore(0);
                setCards([]);
                const gameCards = [...emojis, ...emojis]
                  .sort(() => Math.random() - 0.5)
                  .map((value, index) => ({
                    id: index,
                    value,
                    isFlipped: false,
                    isMatched: false
                  }));
                setCards(gameCards);
              }}
              className="bg-custom-orange text-white px-4 py-2 rounded-lg hover:bg-custom-orange/90"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const handleBackToGames = () => {
    setSelectedGame(null);
  };

  return (
    <section id="games" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-orange/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Interactive <span className="text-custom-orange">Games</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try out these fun games built with JavaScript and CSS animations
          </p>
        </motion.div>

        {selectedGame === null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedGame(0)}
            >
              <div className="bg-black/30 rounded-lg p-6 text-center border-2 border-custom-orange/50 hover:border-custom-orange transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Jumping Box</h3>
                <p className="text-gray-400">Press &apos;J&apos; to jump over obstacles</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedGame(1)}
            >
              <div className="bg-black/30 rounded-lg p-6 text-center border-2 border-custom-orange/50 hover:border-custom-orange transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Color Matching</h3>
                <p className="text-gray-400">Match the target color from options</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedGame(2)}
            >
              <div className="bg-black/30 rounded-lg p-6 text-center border-2 border-custom-orange/50 hover:border-custom-orange transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Memory Cards</h3>
                <p className="text-gray-400">Match pairs of emoji cards</p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleBackToGames}
              className="absolute top-4 left-4 bg-custom-orange/20 text-custom-orange px-4 py-2 rounded-lg hover:bg-custom-orange/30 transition-colors flex items-center gap-2 border border-custom-orange/30 z-50"
            >
              <span>←</span> Back to Games
            </motion.button>
            <div className="mt-8">
              {selectedGame === 0 && <JumpingBoxGame />}
              {selectedGame === 1 && <ColorMatchingGame />}
              {selectedGame === 2 && <MemoryCardGame />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Games; 