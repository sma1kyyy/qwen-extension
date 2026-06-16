# UI Code Generator Extension

Расширение для генерации React/JSX интерфейсов на базе Plasma Web (`@salutejs/plasma-web`).

## Установка

Скопируйте расширение в папку `~/.qwen/extensions/` или укажите путь в настройках Qwen Code:

```json
{
  "extensions": [
    {
      "name": "ui-code-generator",
      "path": "путь/к/ui-generator-extension"
    }
  ]
}
```

## Структура проекта

```
skills/
├── init-ui-project/   — инициализация нового проекта
├── create-layout/     — создание reusable layout-компонентов
├── list-layouts/      — просмотр доступных layout'ов
├── generate-page/     — генерация JSX-страниц
└── plasma-web/        — документация и prompt-инструкции для генерации UI на Plasma Web
    ├── SKILL.md — главная инструкция для агента
    ├── README.md — описание skill
    ├── prompts.md — prompt-инструкции для Qwen
    ├── qwen-extension.json — метаданные расширения
    └── docs/
        ├── components.md     — каталог компонентов, props и правила композиции
        └── examples.md       — запросы и ответы с примерами интеграции
```

## Доступные навыки (skills)

### `init-ui-project`
Создает структуру проекта с валидацией и подтверждением:
- запрос названия и описания проекта;
- проверка на пустые значения;
- подтверждение данных перед сохранением;
- создание файлов `ui-project.xml`, `QWEN.md` и папок `pages`, `docs`

### `create-layout`
Создает reusable layout-компоненты:
- выбор типа layout'а;
- опция добавления навигации;
- валидация и подтверждение данных

### `list-layouts`
Показывает список всех доступных layout'ов в проекте

### `generate-page`
Генерирует JSX-страницы в `pages/`. По умолчанию использует Plasma Web и сохраняет самодостаточный файл с экспортом `export default function App() { ... }`.

### `plasma-web`
Помогает агенту генерировать React UI на базе Plasma Web:
- каталог компонентов, props и правил композиции;
- эталонные запросы и ответы для типовых UI-задач;
- prompt-инструкции для Qwen;
- правила подключения темы и стилей;
- запрет на смешивание UI-kit'ов.

## Технологии

- `@salutejs/plasma-web`
- `@salutejs/plasma-themes`
- `styled-components@5.3.1`
- JSX

## Источник данных о компонентах (Plasma MCP)

Расширение подключает официальный MCP-сервер Plasma `@salutejs/sdds-mcp` (см. `qwen-extension.json`, сервер `plasma-web`). Он запускается по stdio командой:

```bash
npx -y @salutejs/sdds-mcp@latest --lib plasma-web --version latest
```

и отдаёт агенту актуальную документацию: `list_components`, `get_component_props`, `get_component`, `get_component_examples`, `get_tokens`, `get_installation_guide` и др.

Это источник истины по компонентам и props — каталог в `skills/plasma-web/docs/components.md` остаётся офлайн-подсказкой/конвенциями и не должен поддерживаться вручную при каждом обновлении Plasma. При расхождении приоритет за MCP.

Требование: на машине, где работает агент, должны быть установлены Node.js и доступ к npm-реестру (сервер тянется через `npx`).

## Главные ограничения

- Каждый файл страницы должен подключать тему через `createGlobalStyle`.
- Компонент страницы должен экспортироваться строго как `export default function App() { ... }`.
- Нельзя использовать `@coreui/react`, `@prisma-ui/react`, MUI, Ant Design и другие UI-kit'ы вместе с Plasma Web.
- Для layout используйте `div` или локальные styled-components, а не несуществующие `Page`, `Stack`, `Section` из Plasma Web.
- Hooks не нужны для статичных страниц; используйте их только для реально управляемой интерактивности.

## Как использовать

1. Инициализировать проект: `init-ui-project`.
2. Создать layout: `create-layout`.
3. Посмотреть layout'ы: `list-layouts`.
4. Сгенерировать страницу: `generate-page`.
5. Для Plasma Web ориентироваться на skill `plasma-web`.

## Документация

Для подробной документации по каждому skill обратитесь к их SKILL.md файлам:

- `skills/init-ui-project/SKILL.md` — инициализация проекта
- `skills/create-layout/SKILL.md` — создание layout'ов
- `skills/list-layouts/SKILL.md` — просмотр layout'ов
- `skills/generate-page/SKILL.md` — генерация страниц
- `skills/plasma-web/SKILL.md` — генерация UI на Plasma Web