/**
 * Animal pool: id, display name (default locale), image and sound paths.
 * For i18n: use id as key and move names to locale files (e.g. translations.ru.animals[id]).
 */
export const ANIMAL_POOL = [
  { id: 'cow', name: 'Корова', imageUrl: '/assets/images/cow.jpg', soundUrl: '/assets/sounds/cow.mp3' },
  { id: 'dog', name: 'Собака', imageUrl: '/assets/images/dog.jpg', soundUrl: '/assets/sounds/dog.mp3' },
  { id: 'cat', name: 'Кошка', imageUrl: '/assets/images/cat.jpg', soundUrl: '/assets/sounds/cat.mp3' },
  { id: 'pig', name: 'Свинья', imageUrl: '/assets/images/pig.jpg', soundUrl: '/assets/sounds/pig.mp3' },
  { id: 'sheep', name: 'Овца', imageUrl: '/assets/images/sheep.jpg', soundUrl: '/assets/sounds/sheep.mp3' },
  { id: 'horse', name: 'Лошадь', imageUrl: '/assets/images/horse.jpg', soundUrl: '/assets/sounds/horse.mp3' },
  { id: 'chicken', name: 'Курица', imageUrl: '/assets/images/chicken.jpg', soundUrl: '/assets/sounds/chicken.mp3' },
  { id: 'duck', name: 'Утка', imageUrl: '/assets/images/duck.jpg', soundUrl: '/assets/sounds/duck.mp3' },
  { id: 'goat', name: 'Коза', imageUrl: '/assets/images/goat.jpg', soundUrl: '/assets/sounds/goat.mp3' },
  { id: 'rooster', name: 'Петух', imageUrl: '/assets/images/rooster.jpg', soundUrl: '/assets/sounds/rooster.mp3' },
  { id: 'donkey', name: 'Осёл', imageUrl: '/assets/images/donkey.jpg', soundUrl: '/assets/sounds/donkey.mp3' },
  { id: 'goose', name: 'Гусь', imageUrl: '/assets/images/goose.jpg', soundUrl: '/assets/sounds/goose.mp3' },
  { id: 'turkey', name: 'Индейка', imageUrl: '/assets/images/turkey.jpg', soundUrl: '/assets/sounds/turkey.mp3' },
  { id: 'mouse', name: 'Мышь', imageUrl: '/assets/images/mouse.jpg', soundUrl: '/assets/sounds/mouse.mp3' },
  { id: 'frog', name: 'Лягушка', imageUrl: '/assets/images/frog.JPG', soundUrl: '/assets/sounds/frog.mp3' },
];

/**
 * Returns a random subset of n items from the pool (no duplicates).
 */
export function getRandomSubset(pool, n) {
  const copy = [...pool];
  const result = [];
  const len = Math.min(n, copy.length);
  for (let i = 0; i < len; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}
