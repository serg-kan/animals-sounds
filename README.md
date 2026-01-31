# Звуки животных — игра для детей

Простая браузерная игра: ребёнок нажимает на картинку животного, слышит его звук и видит название на русском.

Сделано на **React** (Vite).

## Как запустить

```bash
npm install
npm run dev
```

Откройте в браузере адрес, который покажет Vite (обычно http://localhost:5173).

Сборка для продакшена:

```bash
npm run build
npm run preview
```

## Деплой на Vercel

1. Залейте проект в GitHub (или GitLab / Bitbucket).
2. Зайдите на [vercel.com](https://vercel.com), войдите через GitHub.
3. **Add New** → **Project** → выберите репозиторий `animals-sounds`.
4. Оставьте настройки по умолчанию:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Нажмите **Deploy**. После сборки Vercel выдаст ссылку на сайт (HTTPS).

Дальше каждый `git push` в выбранную ветку будет автоматически запускать новый деплой.

## Структура проекта

```
public/assets/          # Статика: картинки и звуки (раздаются как /assets/...)
src/
  components/           # UI-компоненты (Header, AnimalCard, AnimalGrid)
  constants/            # Тексты интерфейса (для будущей поддержки i18n)
  data/                 # Пул животных и утилиты (getRandomSubset)
  hooks/                # useSound и др.
  App.jsx
  main.jsx
  index.css
```

Структура подготовлена под будущие доработки: разные языки (i18n), разные режимы игры (моды).

## Возможности

- **3, 6 или 9 животных** — переключатель вверху.
- **Обновить** — показать другой случайный набор животных.
- **Клик по животному** — подсветка карточки, воспроизведение звука и показ названия (на русском).

## Звуки и картинки

Звуки ожидаются в `public/assets/sounds/` в формате MP3. Имена файлов должны совпадать с полем `id` животного в `src/data/animals.js`:

- `cow.mp3` — Корова  
- `dog.mp3` — Собака  
- `cat.mp3` — Кошка  
- `pig.mp3` — Свинья  
- `sheep.mp3` — Овца  
- `horse.mp3` — Лошадь  
- `chicken.mp3` — Курица  
- `duck.mp3` — Утка  
- `goat.mp3` — Коза  
- `rooster.mp3` — Петух  
- `donkey.mp3` — Осёл  
- `goose.mp3` — Гусь  
- `turkey.mp3` — Индейка  
- `mouse.mp3` — Мышь  
- `frog.mp3` — Лягушка  

Бесплатные звуки можно скачать, например, с [Mixkit](https://mixkit.co/free-sound-effects/animals/), [Pixabay](https://pixabay.com/sound-effects/search/animals/) или [Freesound](https://freesound.org/search/?q=animals).

Картинки лежат в `public/assets/images/` (имена соответствуют `id` в коде, например `cow.jpg`, `frog.JPG`).
