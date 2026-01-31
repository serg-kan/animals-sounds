import { useState, useCallback } from 'react';
import { ANIMAL_POOL, getRandomSubset } from './data/animals';
import { useSound } from './hooks/useSound';
import { Header } from './components/Header';
import { AnimalGrid } from './components/AnimalGrid';

const DEFAULT_COUNT = 3;

/**
 * Main app view (single "grid" mode). For future modes: add mode state and
 * render different views (e.g. <GridMode />, <QuizMode />) based on mode.
 */
export function App() {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [animals, setAnimals] = useState(() => getRandomSubset(ANIMAL_POOL, DEFAULT_COUNT));
  const [selectedId, setSelectedId] = useState(null);
  const playSound = useSound();

  const handleCountChange = useCallback((newCount) => {
    setCount(newCount);
    setAnimals(getRandomSubset(ANIMAL_POOL, newCount));
    setSelectedId(null);
  }, []);

  const handleRefresh = useCallback(() => {
    setAnimals(getRandomSubset(ANIMAL_POOL, count));
    setSelectedId(null);
  }, [count]);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/36ae6032-ae37-4a00-9026-bcee082e700c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:render',message:'animals state',data:{animalsLength:animals.length,count,firstId:animals[0]?.id},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2'})}).catch(()=>{});

  return (
    <div className="app">
      <Header
        count={count}
        onCountChange={handleCountChange}
      />
      <main className="main">
        <AnimalGrid
          animals={animals}
          selectedId={selectedId}
          onSelect={handleSelect}
          playSound={playSound}
        />
      </main>
    </div>
  );


}
