import { UI } from '../constants/ui';

export function AnimalCard({ animal, isSelected, onSelect, playSound }) {
  const { id, name, imageUrl, soundUrl } = animal;

  const handleClick = () => {
    onSelect(id);
    playSound(soundUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <li
      className={`animal-card ${isSelected ? 'selected' : ''}`}
      role="listitem"
      tabIndex={0}
      aria-label={UI.cardAria(name)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="animal-card-image-wrap">
        <img src={imageUrl} alt={name} loading="lazy" />
      </div>
      <div className={`animal-card-name ${isSelected ? '' : 'empty'}`}>
        {isSelected ? name : ''}
      </div>
    </li>
  );
}
