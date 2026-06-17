# Plasma Web Component Library

## Цель документа

Офлайн-справочник по компонентам `@salutejs/plasma-web` (проверено на версии **1.621.x**) в формате, удобном для LLM.

> ⚠️ **Источник истины — MCP-сервер `plasma-web` (`@salutejs/sdds-mcp`), а не этот файл.**
> Перед использованием компонента/props проверяйте их через `list_components`, `get_component_props`, `get_component`. Таблицы ниже — офлайн-подсказка; при расхождении с MCP актуальны данные MCP.

## Частые галлюцинации (НЕ существуют — песочница падает)

| Выдуманное                              | Реальное                                              |
| --------------------------------------- | ----------------------------------------------------- |
| `HeadlineL` / `HeadlineM` / `HeadlineS` | `H1`…`H6`, `DsplL/M/S`                                |
| `Section` (компонент Plasma)            | нет — styled-component или `<section>`                |
| `Tag`                                   | `Chip`                                                |
| `Radio`                                 | `Radiobox`                                            |
| `Heading` / `Text` (без размера)        | `H1`…`H6` / `TextL/M/S`, `BodyL/M/S`                  |
| `Card` с `padding`/`radius`/`shadow`    | у `Card` таких props нет — стилизуйте styled-обёрткой |
| `Button fullWidth`                      | `Button stretching="filled"`                          |
| `Avatar src`                            | `Avatar url`                                          |

## Быстрый справочник (реальные экспорты)

### Typography
Заголовки: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`
Дисплейные: `DsplL`, `DsplM`, `DsplS`
Текст: `TextL`, `TextM`, `TextS`, `TextXS`
Body: `BodyL`, `BodyM`, `BodyS`, `BodyXS`, `BodyXXS`

### Layout / контейнеры
`Card`, `Cell`, `Divider`, `Grid`, `Container` (см. MCP)

### Actions
`Button`, `IconButton`, `LinkButton`

### Forms
`TextField`, `TextArea`, `Select`, `Checkbox`, `Switch`, `Radiobox`

### Containers / статус
`Avatar`, `Badge`, `Chip`, `Progress`, `Tooltip`, `Spinner`

### Data
`Table`, `Pagination`, `EmptyState`

### Overlay
`Overlay`, `Modal`, `Drawer`, `Popup`, `Toast`, `Notification`

### Navigation
`Tabs`, `Breadcrumbs`

## Общие правила

### Импорт
```jsx
import { Button, Card, TextM, H3 } from '@salutejs/plasma-web'
```
Не импортируйте компоненты из других UI-kit библиотек.

### Токены (типичные значения; уточняйте через MCP `get_component_props`)
- size: `'xs' | 's' | 'm' | 'l' | 'xl'` (зависит от компонента)
- view (Button): `'primary' | 'secondary' | 'accent' | 'clear' | 'success' | 'warning' | 'critical' | ...` — проверяйте через MCP, набор зависит от версии.

---

## Typography

`H1`…`H6`, `DsplL/M/S`, `TextL/M/S/XS`, `BodyL/M/S/XS/XXS` — типографические компоненты.

Общие props: `color?: string`, `noWrap?: boolean`, `breakWord?: boolean`, `isNumeric?: boolean`, `isItalic?: boolean`, `as?` (HTML-тег), плюс spacing-props. Текст передаётся через `children`.

```jsx
<H3>Заголовок страницы</H3>
<TextL>Основной текст</TextL>
<BodyM color="var(--text-secondary)">Вторичный текст</BodyM>
```

> `HeadlineL/M/S` НЕ существуют. Для заголовков используйте `H1`…`H6` или `DsplL/M/S`.

---

## Layout

### Card

Контейнер для группировки контента.

Props (реальные):

| Prop             | Type                         | Default     | Описание    |
| ---------------- | ---------------------------- | ----------- | ----------- |
| `size`           | `'s' \| 'm' \| 'l'`          | —           | Размер.     |
| `view`           | `string`                     | `'default'` | Вид.        |
| `orientation`    | `'horizontal' \| 'vertical'` | —           | Ориентация. |
| `selected`       | `boolean`                    | —           | Выбрана.    |
| `backgroundType` | `'none' \| 'solid'`          | —           | Фон.        |
| `children`       | `ReactNode`                  | —           | Контент.    |

> У `Card` НЕТ props `padding`, `radius`, `shadow`. Отступы/скругление/тень задавайте styled-обёрткой вокруг или внутри Card.

```jsx
const CardBody = styled.div`
  padding: 24px;
`
<Card>
  <CardBody>
    <TextM>Контент карточки</TextM>
  </CardBody>
</Card>
```

### Cell

Элемент списка. Props: `contentLeft`, `content` (основной), `contentRight` — уточняйте через MCP.

### Divider

Горизонтальный разделитель. Уточняйте props через MCP.

---

## Actions

### Button

Props (реальные):

| Prop                         | Type                              | Default     | Описание                                        |
| ---------------------------- | --------------------------------- | ----------- | ----------------------------------------------- |
| `text`                       | `string`                          | —           | Текст кнопки (предпочтительно вместо children). |
| `view`                       | `string`                          | `'default'` | Стиль (набор зависит от версии — см. MCP).      |
| `size`                       | `'xs' \| 's' \| 'm' \| 'l'`       | `'m'`       | Размер.                                         |
| `stretching`                 | `'auto' \| 'filled' \| 'fixed'`   | `'auto'`    | Растяжение (`'filled'` = на всю ширину).        |
| `disabled`                   | `boolean`                         | `false`     | Заблокирована.                                  |
| `isLoading`                  | `boolean`                         | `false`     | Состояние загрузки.                             |
| `contentLeft`/`contentRight` | `ReactElement`                    | —           | Иконки.                                         |
| `onClick`                    | `() => void`                      | —           | Обработчик.                                     |
| `type`                       | `'button' \| 'submit' \| 'reset'` | `'button'`  | Тип.                                            |

> Нет prop `fullWidth` — используйте `stretching="filled"`. Нет prop `loading` — используйте `isLoading`.

```jsx
<Button view="primary" size="m" text="Сохранить" />
<Button view="primary" stretching="filled" text="На всю ширину" />
```

### IconButton

Props: `view`, `size`, `disabled`, `aria-label` (обязательно для доступности), `children` (иконка).

### LinkButton

Кнопка-ссылка. Props: `href`, `text`, `view`, `size` — уточняйте через MCP.

---

## Forms

### TextField

Props (реальные):

| Prop                         | Type                                                   | Default  | Описание                      |
| ---------------------------- | ------------------------------------------------------ | -------- | ----------------------------- |
| `label`                      | `string`                                               | —        | Подпись.                      |
| `placeholder`                | `string`                                               | —        | Подсказка.                    |
| `value`/`defaultValue`       | `string`                                               | —        | Значение.                     |
| `type`                       | `string` (`text`/`email`/`password`/`number`/`tel`...) | `'text'` | Тип input.                    |
| `size`                       | `string`                                               | —        | Размер.                       |
| `view`                       | `string`                                               | —        | Вид (для статусов валидации). |
| `required`                   | `boolean`                                              | `false`  | Обязательное.                 |
| `disabled`                   | `boolean`                                              | `false`  | Заблокировано.                |
| `contentLeft`/`contentRight` | `ReactElement`                                         | —        | Иконки.                       |
| `titleCaption`               | `ReactNode`                                            | —        | Подпись-заголовок.            |
| `id`/`name`                  | `string`                                               | —        | Атрибуты формы.               |

```jsx
<TextField id="email" name="email" label="Email" type="email" placeholder="you@example.com" required />
```

### TextArea
Многострочное поле. Props похожи на TextField (`label`, `value`, `rows`...). Уточняйте через MCP.

### Select
Выбор значения. Props: `label`, `value`, `items`/`options` (структура зависит от версии — проверяйте `get_component_props`).

### Checkbox / Switch
Props: `label`, `checked`/`defaultChecked`, `disabled`, `id`, `name`.

### Radiobox

> Компонент называется `Radiobox`, НЕ `Radio`.

Props: `name`, `value`, `label`, `checked`/`disabled` — уточняйте через MCP.

```jsx
<Radiobox name="payment" value="card" label="Картой" />
<Radiobox name="payment" value="cash" label="Наличными" />
```

---

## Containers and content

### Avatar
Props: `url` (НЕ `src`), `name` (fallback-инициалы), `size` (`s/m/l/xl/xxl`), `view`.
```jsx
<Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />
```

### Badge
Маленькая метка статуса. Props: `text`, `view`, `size`. Уточняйте через MCP.
```jsx
<Badge text="Активен" view="success" size="m" />
```

### Chip
Метка для категорий/фильтров (вместо несуществующего `Tag`). Props: `text`, `view`, `size`, `onClick`. Уточняйте через MCP.

### Progress
Индикатор прогресса. Props: `value` (0–100). Уточняйте через MCP.

### Tooltip
Подсказка при наведении. Props: `text`/`content`, `placement`, `children`.

---

## Data display

### Table
Табличное отображение. Структура `columns`/`data`/`rowKey` зависит от версии — **обязательно** проверяйте через `get_component_props` и `get_component_examples`, т.к. API таблицы часто меняется.

### Pagination
Навигация по страницам. Props зависят от версии — проверяйте через MCP.

### EmptyState
Состояние пустого списка. Props: `title`, `text`/`description`, `actions`. Уточняйте через MCP.

---

## Overlay and feedback

### Modal / Overlay
Диалоговое окно. Управляется через `useState` (`open`/`onClose`). Точные props — через MCP.
```jsx
const [open, setOpen] = useState(false)
<Modal opened={open} onClose={() => setOpen(false)}>
  <TextM>Содержимое</TextM>
</Modal>
```
> Имя prop открытия (`open` vs `opened`/`isOpen`) зависит от версии — проверяйте через MCP.

### Drawer / Popup / Toast / Notification
Overlay-компоненты. Управляются состоянием. Точные props — через MCP `get_component_props`.

---

## Navigation

### Tabs
Переключение секций. Props: `items`/`value`/`onChange` или дочерние `TabItem` — структура зависит от версии, проверяйте через MCP.

### Breadcrumbs
Навигация по иерархии. Props: `items` (массив `{ label, href }`). Уточняйте через MCP.

---

## Spinner
Индикатор загрузки. Props: `size`, `color`. Уточняйте через MCP.
