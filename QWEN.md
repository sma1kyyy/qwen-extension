# UI Code Generator Extension

Расширение для генерации React/JSX интерфейсов на базе Plasma Web (`@salutejs/plasma-web`).

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
        └── examples.md       — эталонные запросы и ответы с примерами
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

## Зависимости для песочницы

Для корректного рендеринга в песочнице необходимы:

**Обязательные пакеты:**
```bash
npm install --save react react-dom
npm install --save @salutejs/plasma-web @salutejs/plasma-themes
npm install --save styled-components@5.3.1
```

**Шрифты (обязательны для правильного отображения текста):**
```html
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css" />
```

Без шрифтов текст будет отображаться с system fonts, что нарушает дизайн-систему Plasma Web.

## Главные ограничения

- Каждый файл страницы должен подключать тему через `createGlobalStyle`.
- Компонент страницы должен экспортироваться строго как `export default function App() { ... }`.
- Нельзя использовать `@coreui/react`, `@prisma-ui/react`, MUI, Ant Design и другие UI-kit'ы вместе с Plasma Web.
- Для layout используйте `div` или локальные styled-components, а не несуществующие `Page`, `Stack`, `Section`, если они не импортируются из Plasma Web в официальной документации для текущей задачи.
- Hooks не нужны для статичных страниц; используйте их только для реально управляемой интерактивности.

## Как использовать

1. Инициализировать проект: `init-ui-project`.
2. Создать layout: `create-layout`.
3. Посмотреть layout'ы: `list-layouts`.
4. Сгенерировать страницу: `generate-page`.
5. Для Plasma Web ориентироваться на skill `plasma-web`.

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
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextL, HeadlineM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <HeadlineM>Заголовок</HeadlineM>
        <TextL>Описание страницы</TextL>
        <Button view="primary" text="Действие" />
      </Page>
    </>
  )
}
```

## Документация Plasma Web

Для генерации UI используйте правила из:
- `skills/plasma-web/SKILL.md`
- `skills/plasma-web/prompts.md`
- `skills/plasma-web/docs/components.md`
- `skills/plasma-web/docs/examples.md`
