# UI Code Generator Extension

Расширение для генерации React/JSX интерфейсов на базе **`@salutejs/plasma-web`**.

## Стек

- `react`, `react-dom`
- `@salutejs/plasma-web`, `@salutejs/plasma-themes`
- `styled-components@5.3.1`
- JSX

## Документация компонентов

Всю документацию по компонентам Plasma Web (props, примеры, ограничения) брать **только** из MCP-сервера `@plasma-web`. Локальные файлы `docs/examples.md` и `docs/components.md` — устаревшие, не использовать.

## Главные ограничения

- Каждый файл страницы подключает тему через `createGlobalStyle`.
- Экспорт компонента — только `export default function App() { ... }`.
- Запрещено смешивать Plasma Web с другими UI-kit'ами (MUI, Ant Design и т.д.).
- Для layout — `div` или локальные styled-components, не `Page`/`Stack`/`Section` (если они не импортируются из Plasma Web).
- Hooks только для реальной интерактивности, не для статичных страниц.
- При переполнении карточек по горизонтали — уменьшать кол-во колонок, а не ширину карточек.

## Структура

```
pages/             — сгенерированные страницы
skills/
├── create-layout/   — создание layout-каркасов
├── generate-page/   — генерация страниц (SKILL.md — основной маршрут)
├── init-ui-project/ — инициализация проекта
├── list-layouts/    — просмотр layout'ов
└── update-page/     — изменение существующих страниц
```
