---
name: plasma-web
description: Генерация и сохранение React/JSX страниц на @salutejs/plasma-web (каркас файла, тема, выбор компонентов, чек-лист, сохранение в pages/). Источник истины по компонентам и props — MCP plasma-web. Когда применять (или максимально похоже по смыслу): создание страницы/экрана/формы/dashboard/профиля, генерация UI-фрагмента, вёрстка интерфейса, проверка props/компонентов, правила темизации. Это основной скилл генерации UI на Plasma Web.
---

# Plasma Web UI generation skill

Используйте этот skill для любых задач генерации страниц, экранов, карточек, форм, профилей, dashboard и UI-фрагментов в этом репозитории, а также для их сохранения в `pages/`.

## Цель

Сгенерировать самодостаточный файл JSX, который:
- использует `@salutejs/plasma-web` как единственный UI-kit;
- подключает тему Plasma Web внутри файла;
- не требует внешних пользовательских компонентов;
- рендерится в песочнице через `export default function App() { ... }`.

## Источник истины: Plasma MCP (ОБЯЗАТЕЛЬНО)

**ВАЖНО: Вызов MCP tools — обязательный этап перед любой генерацией JSX.**

Актуальные данные о компонентах берите из **MCP-сервера `plasma-web`** (`@salutejs/sdds-mcp`), а не из памяти и не из статичных таблиц этого скилла. Статичные `docs/components.md` и `docs/examples.md` — это офлайн-подсказка и конвенции, они могут отставать от текущей версии Plasma.

**Порядок действий перед генерацией страницы:**

1. **Вызов `list_components`** — убедитесь, что КАЖДЫЙ компонент, который вы собираетесь импортировать, реально существует в текущей версии `plasma-web`.
2. **Вызов `get_component_props`** — для каждого нетривиального компонента проверьте актуальные props, их типы и дефолты (например, что у `Button` есть `text`/`view`/`size`, а у `Card` нет `padding`/`radius`/`shadow`).
3. **При сомнениях** — используйте `get_component` / `get_component_examples` для полного описания и примеров; `get_tokens` для токенов; `get_installation_guide` для подключения.

**Правила приоритета:**

1. Если MCP и статичная дока расходятся — **прав MCP**.
2. Не выдумывайте компоненты и props. Если компонент не вернулся в `list_components` или prop не подтверждён через `get_component_props` — **не используйте его**.
3. Если MCP недоступен — работайте по `docs/components.md` (там реальные имена для версии 1.621.x) и **явно пометьте в ответе, что MCP был недоступен и данные могли устареть**.

## Частые галлюцинации (НЕ существуют в plasma-web)

Эти имена модель часто выдумывает — их **нет** в пакете, и песочница на них падает. Используйте правую колонку:

| Выдуманное (падает в песочнице) | Реальное в `@salutejs/plasma-web` |
| --- | --- |
| `HeadlineL` / `HeadlineM` / `HeadlineS` | `H1`…`H6` (заголовки), `DsplL/M/S` (крупные дисплейные) |
| `Section` (как компонент Plasma) | его нет — используйте styled-component или семантический `<section>` |
| `Tag` | `Chip` |
| `Radio` | `Radiobox` |
| `Heading`, `Text` (без размера) | `H1`…`H6` / `TextL/M/S`, `BodyL/M/S` |
| `Card padding="l" radius="l" shadow` | у `Card` нет этих props — отступы/скругление делайте через styled-обёртку |
| `Button fullWidth` | `Button stretching="filled"` |
| `Avatar src="..."` | `Avatar url="..."` |

Если сомневаетесь — проверьте через MCP `list_components` / `get_component_props`.

## Обязательный каркас файла

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextL, H3 } from '@salutejs/plasma-web'

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
        <H3>Название страницы</H3>
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
8. **Запрет "голых" div:** используйте семантические теги `<header>`, `<main>`, `<footer>`, `<aside>` или styled-components (`Page`, `Content`, `Wrapper`) вместо "голых" div. Не выдумывайте компонент `Section` из Plasma — его там нет.
9. **Статичные страницы:** не добавляйте hooks и обработчики, если они не нужны.
10. **Интерактивность:** hooks допустимы только для управляемых компонентов (`Modal`, `Tabs`, `Toast`, формы с реальным состоянием).

## Процедура генерации страницы

### Шаг 1: Сбор требований

Если пользователь просит страницу, но не описал детали — задайте уточняющие вопросы (нужен ли layout-каркас sidebar/header/footer; какой контент; для таблиц/списков — состав полей).

### Шаг 2: Layout (опционально)

Если нужен общий каркас — возьмите styled-обёртки из подходящего файла `layouts/` (см. skill `list-layouts`) и **инлайньте** их прямо в файл страницы. Страница НЕ импортирует layout из `layouts/`, чтобы оставаться самодостаточной для песочницы.

### Шаг 3: Проверка компонентов через MCP

Перед написанием JSX — проверьте все компоненты и props через MCP (см. раздел «Источник истины»).

### Шаг 4: Генерация и сохранение

- Сгенерируйте самодостаточный JSX по каркасу выше.
- Сохраните в `pages/<название-страницы>.jsx` (например, страница профиля → `pages/profile.jsx`).
- Файл содержит только код страницы, готовый к рендеру, без поясняющего текста вокруг.
- Если пользователь передал готовый JSX — сохраните его как есть, не меняя выбранный UI-kit.

## Зависимости для песочницы

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

## Как выбирать компоненты (реальные имена)

- Заголовки: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`; крупные дисплейные — `DsplL`, `DsplM`, `DsplS`.
- Текст: `TextL`, `TextM`, `TextS`, `TextXS`; body — `BodyL`, `BodyM`, `BodyS`.
- Действия: `Button`, `IconButton`, `LinkButton`.
- Формы: `TextField`, `TextArea`, `Select`, `Checkbox`, `Switch`, `Radiobox`.
- Контейнеры и статус: `Card`, `Badge`, `Chip`, `Avatar`, `Divider`, `Cell`.
- Данные: `Table`, `Pagination`, `EmptyState`.
- Overlay/feedback: `Overlay`, `Modal`, `Drawer`, `Popup`, `Tooltip`, `Spinner`, `Toast`, `Notification`.
- Навигация: `Tabs`, `Breadcrumbs`.

## Проверка перед ответом

Перед завершением проверьте:
- в файле нет `@prisma-ui/react` и `@coreui/react`;
- есть `@salutejs/plasma-web`;
- есть `createGlobalStyle`;
- есть `<Theme />` первым элементом;
- есть ровно один default export в формате `export default function App()`;
- НЕ используются `HeadlineL/M/S`, `Section`, `Tag`, `Radio` (это галлюцинации — см. таблицу выше);
- `Avatar` использует `url`, а не `src`;
- `Button` использует `text`/`view`/`size`/`stretching`, а не `fullWidth`;
- `Card` НЕ получает `padding`/`radius`/`shadow` (их нет; стилизуйте через styled-обёртку);
- все использованные компоненты и их props подтверждены через MCP `plasma-web` (`list_components` / `get_component_props`), либо явно отмечено, что MCP был недоступен.
