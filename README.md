# GitHub Pages deploy

Статический сайт «Цифровая тетрадь-конспект · География v2.0.2» опубликован на GitHub Pages:
https://yogern.github.io/

Весь сайт лежит в корне ветки: `index.html`, `sw.js`, `manifest.webmanifest`, иконки и `originals/*.webp`.
Файл `.nojekyll` отключает обработку Jekyll, чтобы все файлы публиковались как есть.

## Как обновить сайт

1. Замените `index.html` и/или ассеты в корне репозитория.
2. `git add . && git commit -m "Update site" && git push`
3. GitHub Pages автоматически обновит сайт примерно за 30 секунд.
