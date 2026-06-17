# Plasma Web skill

Skill для генерации React/JSX интерфейсов на базе `@salutejs/plasma-web`.

## Что решает

- Переводит генерацию с CoreUI/Prisma UI на Salute Plasma Web.
- Добавляет обязательное подключение темы через `styled-components`.
- Фиксит формат экспорта для песочницы: `export default function App() { ... }`.
- Запрещает смешивание UI-kit'ов.

## Зависимости целевого проекта

```bash
npm install --save react react-dom
npm install --save @salutejs/plasma-web @salutejs/plasma-themes
npm install --save styled-components@5.3.1
```

Если используются иконки:

```bash
npm install --save @salutejs/plasma-icons
```

## Шрифты (обязательно для песочницы)

Для правильного отображения текста добавьте шрифты в `<head>` файла `index.html`:

```html
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css" />
<link rel="stylesheet" href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css" />
```

Без шрифтов текст будет отображаться с system fonts, что нарушает дизайн-систему Plasma Web.

## Минимальный пример

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, HeadlineM, TextM } from '@salutejs/plasma-web'

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
        <HeadlineM>Plasma Web</HeadlineM>
        <TextM>Компоненты рендерятся с темой.</TextM>
        <Button view="primary" text="Готово" />
      </Page>
    </>
  )
}
```

## Документы

- `prompts.md` — системное поведение генератора.
- `docs/components.md` — краткий каталог компонентов и props.
- `docs/examples.md` — готовые примеры страниц.
