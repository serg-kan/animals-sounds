import { useEffect, useRef } from 'react';
import { AnimalCard } from './AnimalCard';

export function AnimalGrid({ animals, selectedId, onSelect, playSound }) {
  const gridRef = useRef(null);
  // #region agent log
  useEffect(() => {
    if (!gridRef.current) return;
    const grid = gridRef.current;
    const main = grid.closest('.main');
    const gridRect = grid.getBoundingClientRect();
    const mainRect = main ? main.getBoundingClientRect() : null;
    const cs = window.getComputedStyle(grid);
    fetch('http://127.0.0.1:7244/ingest/36ae6032-ae37-4a00-9026-bcee082e700c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AnimalGrid.jsx:effect',message:'layout measure',data:{animalsLength:animals.length,gridW:gridRect.width,gridH:gridRect.height,gridTop:gridRect.top,mainW:mainRect?.width,mainH:mainRect?.height,computedWidth:cs.width,computedHeight:cs.height},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1-H5'})}).catch(()=>{});
  }, [animals.length]);
  // #endregion
  return (
    <ul ref={gridRef} className="animals-grid" role="list">
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
