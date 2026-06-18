---
name: generate-page
description: Навык для  генерация React/JSX - UI макетов сайтов и веб-приложений. Вызывай его тогда когда пользовать просит создать макет сайта, веб-приложения или макет.
---

# generate-page

Используйте этот skill для любых задач генерации страниц, экранов, карточек, форм, профилей, dashboard и UI-фрагментов на Plasma Web, а также для их публикации через MCP `ui-generator-mcp`.

## Цель

Сгенерировать самодостаточный файл JSX, который:
- использует `@salutejs/plasma-web` как единственный UI-kit;
- подключает тему Plasma Web внутри файла;
- не требует внешних пользовательских компонентов;
- рендерится в песочнице через `export default function App() { ... }`.

## Источник истины: Plasma MCP (СТРОГО ОБЯЗАТЕЛЬНО)

**ВАЖНО: Вызов MCP tools — обязательный этап перед любой генерацией JSX. Без успешного вызова MCP генерация НЕ начинается.**

Актуальные данные о компонентах берите исключительно из **MCP-сервера `plasma-web`** (`@salutejs/sdds-mcp`). Статичные `docs/components.md` и `docs/examples.md` — резервный офлайн-источник, использование которого требует явного разрешения пользователя (см. ниже).


**Правила приоритета:**

1. Если MCP и статичная дока расходятся — **прав MCP**.
2. Не выдумывайте компоненты и props. Если компонент не вернулся в `list_components` или prop не подтверждён через `get_component_props` — **не используйте его**.
3. **Если MCP недоступен** — немедленно сообщите пользователю:
   > «MCP-сервер `plasma-web` недоступен. Я не могу гарантировать актуальность данных о компонентах. Продолжить генерацию по локальной офлайн-документации (версия 1.621.x, может устареть)?»
   
   Ждите явного подтверждения. Если пользователь дал разрешение — используйте `docs/components.md` и явно пометьте в ответе: «⚠️ Сгенерировано по офлайн-документации (MCP недоступен). Props и имена компонентов могут не совпадать с текущей версией пакета.»
   
   Если пользователь отказал — не генерируйте код.

## Правила отступов и качества вёрстки

Это обязательные правила. Без них компонент считается некачественным.

### Spacing (шкала отступов)

Все отступы кратны 4px. Используйте только эти значения:

| Имя | Значение | Когда использовать |
|---|---|---|
| `4px` | xs | Между иконкой и текстом, мелкие зазоры |
| `8px` | s | Между элементами внутри одной группы |
| `12px` | sm | Между Badge и следующим блоком |
| `16px` | m | Между полями формы, gap внутри карточки, margin между секциями внутри Card |
| `24px` | l | **Padding внутри Card**, gap между карточками в сетке |
| `32px` | xl | **Padding страницы (Page)**, крупные секции |
| `48px` / `64px` | xxl | Пустые состояния, центрирование на весь экран |

### Обязательные правила для Card

1. **Всегда задавайте фон:** `style={{ background: 'var(--surface-solid-card)' }}`
2. **Всегда оборачивайте контент** в `CardBody` (`styled.div` с `padding: 24px`)
3. **`CardContent`** — только для медиа/изображений с `aspectRatio`, не добавляет padding
4. **`CardInnerContent`** — только для абсолютного оверлея поверх медиа

```jsx
const CardBody = styled.div`
  padding: 24px;
`

// Правильно:
<Card style={{ background: 'var(--surface-solid-card)' }}>
  <CardBody>
    <H4>Заголовок</H4>
    <TextM style={{ marginTop: '8px' }}>Описание</TextM>
    <Button view="primary" text="Действие" style={{ marginTop: '16px' }} />
  </CardBody>
</Card>
```

### Обязательные правила для Page

```jsx
const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;           /* НЕ через CSS-переменную — она резолвится в белый */
  color: var(--text-primary, #ffffff);
`
```

### Типовые паттерны отступов

**Страница с несколькими карточками:**
```jsx
<Page>
  <H3>Заголовок страницы</H3>                        {/* marginBottom не нужен */}
  <Card style={{ marginTop: '24px', background: ... }}> {/* первая карточка */}
    <CardBody>...</CardBody>
  </Card>
  <Card style={{ marginTop: '16px', background: ... }}> {/* следующая карточка */}
    <CardBody>...</CardBody>
  </Card>
</Page>
```

**Сетка карточек:**
```jsx
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
`
```

**Форма внутри карточки:**
```jsx
const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`
```

**Горизонтальная группа кнопок:**
```jsx
<div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
  <Button view="primary" text="Сохранить" />
  <Button view="secondary" text="Отмена" />
</div>
```

**Hero-блок (аватар + краткая информация):**
```jsx
const HeroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
const HeroInfo = styled.div`
  flex: 1;
`
// Использование:
<HeroRow>
  <Avatar url="..." name="Имя" size="xl" />
  <HeroInfo>
    <H4>Имя Фамилия</H4>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
      <Badge view="positive" size="s">Активен</Badge>
      <TextS color="var(--text-secondary)">ID: 001</TextS>
    </div>
    <TextM color="var(--text-secondary)" style={{ marginTop: '6px' }}>email@example.com</TextM>
  </HeroInfo>
</HeroRow>
```

**Двухколоночная сетка полей (для детальных карточек):**
```jsx
const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
`
const FieldLabel = styled(TextS)`
  color: var(--text-secondary, #888);
  display: block;
  margin-bottom: 2px;
`
const FieldValue = styled(TextM)`
  display: block;
`
// Использование:
<FieldGrid>
  <div><FieldLabel>Отдел</FieldLabel><FieldValue>Кредитный</FieldValue></div>
  <div><FieldLabel>Должность</FieldLabel><FieldValue>Эксперт</FieldValue></div>
  <div style={{ gridColumn: '1 / -1' }}><FieldLabel>Адрес</FieldLabel><FieldValue>Москва</FieldValue></div>
</FieldGrid>
```

**Группа тегов/бейджей:**
```jsx
const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`
<TagRow>
  <Badge view="accent" size="m">Тег 1</Badge>
  <Badge view="accent" size="m">Тег 2</Badge>
</TagRow>
```

### Правила цвета текста

**Хороший контраст — обязателен.** Серый текст на тёмном фоне нечитаем.

| Где | Цвет |
|-----|------|
| Основной текст на тёмном фоне | `color: var(--text-primary, #ffffff)` — белый |
| Навигация в sidebar/header | `color: var(--text-primary, #ffffff)` — белый, НЕ серый |
| Активный пункт меню | `color: var(--text-accent, #2AC673)` или `font-weight: 600` |
| Вторичный текст (подпись, метка поля) | `color: var(--text-secondary, #b0b0b0)` — только для явно второстепенного |
| Текст на светлом фоне | `color: var(--text-primary, #080808)` — тёмный |
| Цена, метрика — акцент | `color: var(--text-accent)` или белый `#ffffff` |

**Запрещено:** использовать `var(--text-secondary)` для навигации, заголовков, названий товаров, основного контента — только для подписей и меток.

### Паттерн: sidebar-навигация с правильными цветами

```jsx
const Sidebar = styled.aside`
  width: 240px;
  background: #121212;
  padding: 16px;
  border-right: 1px solid rgba(255,255,255,0.08);
`

const NavItem = styled.div`
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-primary, #ffffff);          /* белый, не серый */
  font-size: 14px;
  margin-bottom: 4px;

  &:hover {
    background: rgba(255,255,255,0.06);
  }

  &.active {
    background: rgba(255,255,255,0.1);
    font-weight: 600;
  }
`
```

### Чеклист качества перед сохранением

- [ ] `Page` имеет `background: #080808` (не через CSS-переменную)
- [ ] Каждая `Card` имеет `style={{ background: 'var(--surface-solid-card)' }}`
- [ ] Каждая `Card` имеет `CardBody` с `padding: 24px` вокруг контента
- [ ] Отступы между секциями внутри Card: `marginTop: '16px'`
- [ ] Первая карточка после заголовка страницы: `marginTop: '24px'`
- [ ] Следующие карточки: `marginTop: '16px'`
- [ ] Поля формы обёрнуты в flex-column с `gap: 16px`
- [ ] Кнопки в группе обёрнуты в flex с `gap: 12px`
- [ ] `Badge view="positive"` (не `tone="success"`)
- [ ] `Button view="critical"` (не `view="danger"`)
- [ ] Навигационные пункты используют `color: var(--text-primary, #ffffff)`, а не серый
- [ ] Контент не пустой — минимум 4–6 mock-элементов в любом списке/каталоге/таблице


## Обязательный каркас файла

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextL, H3, Card } from '@salutejs/plasma-web'

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
  color: var(--text-primary, #ffffff);
`

const CardBody = styled.div`
  padding: 24px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H3>Название страницы</H3>
        <TextL>Описание</TextL>
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <Button view="primary" text="Действие" />
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

## Жесткие правила

1. **Экспорт только такой:** `export default function App() { ... }`.
2. **Нельзя:** `const App = () => { ... }`, `const ProfilePage = () => { ... }`, `export default ProfilePage`.
3. **Тема обязательна:** создайте `` const Theme = createGlobalStyle`${plasma_web__dark[0]}` `` (или `plasma_web__light[0]`) и отрендерите `<Theme />` первым элементом в fragment.
4. **Импорты UI:** только из `@salutejs/plasma-web`.
5. **Темы:** импортируйте из `@salutejs/plasma-themes`.
6. **styled-components:** импортируйте `styled, { createGlobalStyle }` из `styled-components`.
7. **Не смешивать UI-kit'ы:** не используйте `@coreui/react`, `@prisma-ui/react`, MUI, Ant Design.
8. **Запрет "голых" div:** используйте семантические теги `<header>`, `<main>`, `<footer>`, `<aside>` или styled-components (`Page`, `Content`, `Wrapper`) вместо "голых" div. Не выдумывайте компонент `Section` из Plasma — его там нет.
9. **Статичные страницы:** не добавляйте hooks и обработчики, если они не нужны.
10. **Интерактивность:** hooks допустимы только для управляемых компонентов (`Modal`, `Tabs`, `Toast`, формы с реальным состоянием).
11. **Всегда наполняй контент реальными mock-данными.** Пустых страниц быть не должно. Если пользователь не предоставил данные — придумай их сам:
    - Каталог/список → минимум 6 элементов с разными реальными названиями, ценами, статусами
    - Таблица → минимум 5 строк
    - Профиль/карточка → заполни все поля правдоподобными данными
    - Dashboard → реальные числа в метриках, названия в графиках
    - Форма → не нужны данные, но должны быть все поля с placeholder
    - **Пустой контент = некачественная работа**

## Процедура генерации страницы (обязательный алгоритм)

**ВАЖНО: Проходите все 6 шагов последовательно. Не пропускайте ни один шаг.**

### Шаг 1: Сбор требований
Задайте пользователю три обязательных вопроса:
1. Нужен ли layout (шапка, меню, футер)?
2. Какая тема оформления (dark/light/с новой типографикой)?
3. Детали страницы (контент, поля, данные)?

### Шаг 2: Layout (если пользователь выбрал)
1. Запустите skill `list-layouts`
2. Если layouts найдены → покажите список и спросите выбор
3. Если не найдены → предложите создать новый или продолжить без
4. Инлайните styled-компоненты в страницу

### Шаг 3: MCP-проверка компонентов (ОБЯЗАТЕЛЬНО)
1. **Вызов `list_components`** — проверьте существование каждого компонента
2. **Вызов `get_component_props`** — для нетривиальных компонентов проверьте props
3. При сомнениях → `get_component` / `get_component_examples` / `get_tokens`

**Если MCP недоступен** → немедленно сообщите пользователю и ждите подтверждения на офлайн-документацию.

### Шаг 4: Генерация JSX
Сгенерируйте самодостаточный файл по обязательному каркасу (см. раздел «Обязательный каркас файла»).

### Шаг 5: Публикация через MCP
1. Вызовите `mcp__ui-generator-mcp__get_all_projects`
2. Спросите пользователя, в какой проект публиковать
3. Вызовите `mcp__ui-generator-mcp__create_project_page`
4. Верните ссылку на превью

**Никогда не создавайте локальный файл автоматически**.

### Шаг 6: Финальная проверка
Проверьте чеклист качества (см. раздел «Чеклист качества перед сохранением»).

### Шаг 2: Layout (только если пользователь выбрал layout)

**Ищи layouts ТОЛЬКО в папке `./layouts/` текущего проекта. Никаких других директорий.**

1. **Сначала всегда запусти skill `list-layouts`** — он проверит `./layouts/` и вернёт список.

2. **Если layouts найдены** — покажи пользователю нумерованный список и **обязательно спроси**:
   > «Найдены готовые layouts:
   > 1. marketplace
   > 2. dashboard
   > N. Создать новый layout
   >
   > Какой использовать?»
   
   Дождись ответа. **Не выбирай layout самостоятельно.**
   - Если пользователь выбрал существующий → прочитай `layouts/{название}.jsx` → возьми styled-компоненты и инлайни в страницу.
   - Если пользователь выбрал «Создать новый» → запусти skill `create-layout`.

3. **Если layouts не найдены** — сообщи пользователю и **спроси**:
   > «Layouts не найдены. Создать новый layout или продолжить без него?»
   - Если «Создать» → запусти skill `create-layout` → он вернёт JSX styled-компоненты → инлайни их в страницу.
   - Если «Без layout» → генерируй только контентный блок.

Инлайнинг = скопировать styled-компоненты (`Header`, `Nav`, `Sidebar`, `Main`, `Footer`) прямо в JSX страницы. Страница не импортирует layout из файла — она самодостаточна для превью.

### Шаг 3: Проверка компонентов через MCP

Перед написанием JSX — проверьте все компоненты и props через MCP plasma-web (см. раздел «Источник истины»).

### Шаг 4: Генерация и публикация через MCP

**ВАЖНО: задача считается невыполненной, пока вы не вернули пользователю ссылку на превью из `ui-generator-mcp`. Генерация JSX без публикации — незавершённая работа. Локальный файл не создавайте.**

1. Сгенерируйте самодостаточный JSX по каркасу выше.
2. Вызовите `mcp__ui-generator-mcp__get_all_projects` — получите список проектов и **всегда спросите пользователя**, в какой публиковать. Не выбирайте проект самостоятельно, даже если он один. Покажите нумерованный список + пункт «Создать новый проект». Дождитесь ответа.
3. Вызовите `mcp__ui-generator-mcp__create_project_page` с кодом страницы и названием.
4. Верните пользователю ссылку на превью из ответа MCP.

**Никогда не создавайте локальный файл автоматически** — ни до публикации через MCP, ни после.

После успешной публикации верните ссылку и спросите:
> «Сохранить копию локально в pages/?»

Только при явном «да» создайте `pages/<название>.jsx`.

Если `ui-generator-mcp` недоступен — сообщите и спросите, сохранить ли локально. Только при согласии создайте файл.

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
- `Card` НЕ получает `padding`/`radius`/`shadow` (их нет); для внутренних отступов используйте `CardBody` styled div с `padding: 24px`; фон карточки задавайте через `style={{ background: 'var(--surface-solid-card)' }}`;
- все использованные компоненты и их props подтверждены через MCP `plasma-web` (`list_components` / `get_component_props`), либо явно отмечено, что MCP был недоступен.
