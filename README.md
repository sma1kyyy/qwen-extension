# UI Code Generator Extension

Расширение для генерации UI-интерфейсов на основе React, CoreUI и Prisma UI

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
└── prisma-ui/         — документация и prompt-инструкции для генерации UI на Prisma UI
    ├── SKILL.md              — главная инструкция для агента
    ├── README.md             — описание skill для людей
    ├── prompts.md            — prompt-инструкции для Qwen
    ├── qwen-extension.json   — метаданные расширения
    └── docs/
        ├── components.md     — каталог компонентов, props и правила композиции
        └── examples.md       — запросы и ответы с примерами интеграции
```

## Доступные навыки (skills)

### `init-ui-project`
Создает структуру проекта с валидацией и подтверждением:
- Запрос названия и описания проекта
- Проверка на пустые значения
- Подтверждение данных перед сохранением
- Создание файлов `ui-project.xml`, `QWEN.md` и папок `pages`, `docs`

### `create-layout`
Создает reusable layout-компоненты:
- Выбор типа layout'а (с сайдбаром, хедером, футером, пустой, комбинированный)
- Опция добавления навигации
- Валидация и подтверждение данных

### `list-layouts`
Показывает список всех доступных layout'ов в проекте

### `generate-page`
Генерирует JSX-страницы с возможностью использования layout'ов:
- Выбор layout'а для страницы
- Контент страницы автоматически оборачивается в выбранный layout как children

### `prisma-ui`
Помогает агенту генерировать React UI на базе Prisma UI:
- Каталог компонентов, props и правил композиции
- Эталонные запросы и ответы для типовых UI-задач
- Prompt-инструкции для Qwen
- Правила интеграции с другими skills для сохранения кода в файлы
- Полный цикл работы: генерация → подтверждение → сохранение

## Технологии

- React
- CoreUI for React
- Prisma UI
- JSX

## Ограничения

- Для CoreUI-skills: без хуков (`useState` и др.) и без реализации обработчиков событий
- Для CoreUI-skills: только компоненты CoreUI (без пользовательских компонентов)
- Для `prisma-ui`: только документированные компоненты Prisma UI из `@prisma-ui/react`
- Для `prisma-ui`: hooks допустимы только когда интерактивность обязательна, например для `Modal`

<!-- - Без хуков (useState и др.)
- Статичный код без обработчиков событий
- Только компоненты CoreUI (без пользовательских компонентов) -->

## Как использовать

1. Инициализировать проект: `init-ui-project`
2. Создать layout: `create-layout`
3. Посмотреть layout'ы: `list-layouts`
4. Сгенерировать страницу: `generate-page`
5. Сгенерировать интерфейс на Prisma UI: `prisma-ui`

## Документация

Для подробной документации по каждому skill обратитесь к их SKILL.md файлам:

- `skills/init-ui-project/SKILL.md` — инициализация проекта
- `skills/create-layout/SKILL.md` — создание layout'ов
- `skills/list-layouts/SKILL.md` — просмотр layout'ов
- `skills/generate-page/SKILL.md` — генерация страниц
- `skills/prisma-ui/SKILL.md` — генерация UI на Prisma UI