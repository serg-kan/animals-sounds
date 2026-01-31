import { useRef, useCallback } from 'react';

const PLAY_LIMIT_MS = 3000;

/**
 * Returns a stable playSound(url) that stops after PLAY_LIMIT_MS and stops any previous playback.
 */
export function useSound() {
  const currentAudioRef = useRef(null);
  const playLimitTimeoutRef = useRef(null);

  const playSound = useCallback((url) => {
    if (playLimitTimeoutRef.current) {
      clearTimeout(playLimitTimeoutRef.current);
      playLimitTimeoutRef.current = null;
    }
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    try {
      const audio = new Audio(url);
      currentAudioRef.current = audio;
      audio.currentTime = 0;
      audio.play().catch(() => {});
      playLimitTimeoutRef.current = setTimeout(() => {
        if (currentAudioRef.current) {
          currentAudioRef.current.pause();
          currentAudioRef.current.currentTime = 0;
        }
        playLimitTimeoutRef.current = null;
      }, PLAY_LIMIT_MS);
    } catch (_) {}
  }, []);

  return playSound;
}
