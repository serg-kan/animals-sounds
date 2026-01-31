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

  return (
    <div className="app">
      <Header
        count={count}
        onCountChange={handleCountChange}
        onRefresh={handleRefresh}
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
