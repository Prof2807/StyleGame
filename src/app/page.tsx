'use client'

import { useState, useEffect, useCallback } from "react";
import { LEVELS } from "./gameData";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [positions, setPositions] = useState<{ x: number, y: number }[]>([]);

  const currentLevel = LEVELS[level];
  const currentQuestion = currentLevel.questions[questionIdx];

  const generatePositions = useCallback((numOptions: number) => {
    const newPositions = Array.from({ length: numOptions }).map(() => ({
      x: Math.floor(Math.random() * 85),
      y: Math.floor(Math.random() * 80),
    }));
    setPositions(newPositions);
  }, []);

  useEffect(() => {
    if (level === 3 || level === 4) {
      generatePositions(currentQuestion.options.length);
    } 
    else if (level >= 5) {
      const interval = setInterval(() => generatePositions(currentQuestion.options.length), 1500);
      return () => clearInterval(interval);
    } 
    else {
      setPositions([]);
    }
  }, [level, currentQuestion, generatePositions]);

  const handleChoice = (selectedOption: string) => {
    if (selectedOption === currentQuestion.correct) {
      if (level < LEVELS.length - 1) {
        const nextLevelData = LEVELS[level + 1];
        setLevel(level + 1);
        setQuestionIdx(Math.floor(Math.random() * nextLevelData.questions.length));
      } else {
        alert("YOU ARE THE HYPER-DIGITAL MASTER!");
      }
    } else {
      if (level > 0) {
        const prevLevelData = LEVELS[level - 1];
        setLevel(level - 1);
        setQuestionIdx(Math.floor(Math.random() * prevLevelData.questions.length));
      }
    }
  };

  return (
    <main className="w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className={`${currentLevel.styles} w-full h-full transition-all duration-700 flex flex-col`}>

        <div className="flex flex-col items-center justify-center h-1/3 p-6 text-center z-20">
          <h1 className={currentLevel.titleStyle}>
            CURRENT LEVEL: {level + 1}
          </h1>
          <p className="text-3xl mt-8 font-bold tracking-tight">
            {currentQuestion.text}
          </p>
        </div>

        <div className="relative grow p-10">
          <div className={`w-full h-full relative ${level < 3 ? 'flex flex-wrap justify-center items-center gap-4' : ''}`}>
            {currentQuestion.options.map((option, idx) => {
              const hasPosition = level >= 3 && positions[idx];
              
              const btnStyleOverrides = hasPosition ? {
                position: 'absolute' as 'absolute',
                left: `${positions[idx].x}%`,
                top: `${positions[idx].y}%`,
                transition: level >= 5 ? 'all 1.5s ease-in-out' : 'none',
                zIndex: 10
              } : {};

              return (
                <button
                  key={`${level}-${questionIdx}-${idx}`}
                  onClick={() => handleChoice(option)}
                  style={btnStyleOverrides}
                  className={`${currentLevel.btnStyle} whitespace-nowrap`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}