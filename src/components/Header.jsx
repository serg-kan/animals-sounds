import { UI, COUNT_OPTIONS } from '../constants/ui';

export function Header({ count, onCountChange, onRefresh }) {
  return (
    <header className="header">
      <h1>{UI.appTitle}</h1>
      <div className="controls">
        <span className="controls-label">{UI.countLabel}</span>
        <div className="count-buttons" role="group" aria-label={UI.countAria}>
          {COUNT_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              className={`count-btn ${count === n ? 'active' : ''}`}
              data-count={n}
              onClick={() => onCountChange(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="refresh-btn"
          aria-label={UI.refreshAria}
          onClick={onRefresh}
        >
          {UI.refreshButton}
        </button>
      </div>
    </header>
  );
}
