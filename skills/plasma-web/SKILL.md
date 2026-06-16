---
name: plasma-web
description: Справочник и правила генерации UI на @salutejs/plasma-web (каркас файла, тема, чек-лист, источник истины по компонентам и props — MCP plasma-web). Когда применять (или максимально похоже по смыслу): любые задачи UI на Plasma Web, проверка props/компонентов, правила вёрстки и темизации, актуализация документации компонентов. Базовые правила — подключается всегда при работе с Plasma Web, не вместо generate-page.
---

# Plasma Web UI generation skill

Используйте этот skill для любых задач генерации страниц, экранов, карточек, форм, профилей, dashboard и UI-фрагментов в этом репозитории.

## Цель

Сгенерировать самодостаточный файл JSX, который:
- использует `@salutejs/plasma-web` как единственный UI-kit;
- подключает тему Plasma Web внутри файла;
- не требует внешних пользовательских компонентов;
- рендерится в песочнице через `export default function App() { ... }`.

## Источник истины: Plasma MCP

Актуальные данные о компонентах берите из **MCP-сервера `plasma-web`** (`@salutejs/sdds-mcp`), а не из памяти и не из статичных таблиц этого скилла. Статичные `docs/components.md` и `docs/examples.md` — это офлайн-подсказка и конвенции, они могут отставать от текущей версии Plasma.

Перед тем как использовать компонент или его prop, проверяйте через инструменты MCP:

- `list_components` — есть ли вообще такой компонент в текущей версии plasma-web.
- `get_component_props` — актуальные пропсы, типы, дефолты (например, есть ли у `Button` props `text`/`view`/`size`).
- `get_component` / `get_component_examples` — полное описание и примеры использования.
- `get_tokens` — токены для кастомных стилей.
- `get_installation_guide` — подключение пакета и темы.

Правила приоритета:

1. Если MCP и статичная дока расходятся — **прав MCP**.
2. Не выдумывайте props. Если prop не подтверждён через `get_component_props`, не используйте его.
3. Если MCP недоступен — работайте по статичной доке, но пометьте в ответе, что данные могли устареть.

## Обязательный каркас файла

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
        <HeadlineM>Название страницы</HeadlineM>
        <TextL>Описание</TextL>
        <Button view="primary" text="Действие" />
      </Page>
    </>
  )
}
```

## Жесткие правила

1. **Экспорт только такой:** `export default function App() { ... }`.
2. **Нельзя:** `const App = () => { ... }`, `const ProfilePage = () => { ... }`, `export default ProfilePage`.
3. **Тема обязательна:** создайте `const Theme = createGlobalStyle(plasma_web__dark)` или `plasma_web__light` и отрендерите `<Theme />` первым элементом в fragment.
4. **Импорты UI:** только из `@salutejs/plasma-web`.
5. **Темы:** импортируйте из `@salutejs/plasma-themes`.
6. **styled-components:** импортируйте `styled, { createGlobalStyle }` из `styled-components`.
7. **Не смешивать UI-kit'ы:** не используйте `@coreui/react`, `@prisma-ui/react`, MUI, Ant Design.
8. **Запрет "голых" div:** используйте семантические теги `<header>`, `<main>`, `<footer>`, `<aside>` или styled-components (`Page`, `Content`, `Section`) вместо "голых" div.
9. **Статичные страницы:** не добавляйте hooks и обработчики, если они не нужны.
10. **Интерактивность:** hooks допустимы только для управляемых компонентов (`Modal`, `Tabs`, `Toast`, формы с реальным состоянием).

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
<!-- Добавить в <head> index.html -->
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css" />
```

Без шрифтов текст будет отображаться с system fonts, что нарушает дизайн-систему Plasma Web.

## Как выбирать компоненты

- Заголовки и текст: `HeadlineL`, `HeadlineM`, `HeadlineS`, `TextL`, `TextM`, `TextS`, `BodyL`, `BodyM`, `BodyS`.
- Действия: `Button`, `IconButton`.
- Формы: `TextField`, `TextArea`, `Select`, `Checkbox`, `Switch`, `Radio`.
- Контейнеры и статус: `Card`, `Badge`, `Avatar`, `Divider`, `Cell`.
- Overlay/feedback: `Overlay`, `Modal`, `Tooltip`, `Spinner`, `Toast`.

## Сохранение результата

- Если пользователь просит создать страницу — сохраните ее в `pages/<name>.jsx`.
- Для страницы профиля используйте `pages/profile.jsx`.
- Готовая страница должна быть самодостаточной и не импортировать локальные файлы.

## Проверка перед ответом

Перед завершением проверьте:
- в файле нет `@prisma-ui/react` и `@coreui/react`;
- есть `@salutejs/plasma-web`;
- есть `createGlobalStyle`;
- есть `<Theme />`;
- есть ровно один default export в формате `export default function App()`;
- `Badge` получает текст через `text="..."` или `children` только если это подтверждено используемой версией; предпочтительно использовать `text`;
- `Avatar` использует `url`, а не `src`;
- все использованные компоненты и их props подтверждены через MCP `plasma-web` (`list_components` / `get_component_props`), либо явно отмечено, что MCP был недоступен.