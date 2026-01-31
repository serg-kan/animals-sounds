import { AnimalCard } from './AnimalCard';

export function AnimalGrid({ animals, selectedId, onSelect, playSound }) {
  return (
    <ul className="animals-grid" role="list">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          isSelected={selectedId === animal.id}
          onSelect={onSelect}
          playSound={playSound}
        />
      ))}
    </ul>
  );
}
