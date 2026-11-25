# GitHub Pages deploy

Сайт публикуется с корня этой ветки (`arena/2d72700a-practice-work`) через GitHub Pages:
https://yogern.github.io/Practice-Work/

## Как обновить сайт

1. Положите `index.html` (и нужные ассеты) в корень репозитория.
2. `git add . && git commit -m "Update site" && git push origin HEAD`
3. GitHub Pages автоматически пересоберёт сайт за ~30 секунд.

Файл `.nojekyll` отключает обработку Jekyll, чтобы все файлы (в том числе `originals/*.webp`) публиковались как есть.
`sw.js` — service worker для офлайн-кэша, `manifest.webmanifest` — PWA-манифест.
