# Plasma Web Component Library

## Источник и версия

> Данный файл сгенерирован на основе TypeScript-типов из `node_modules/@salutejs/plasma-web/types/` и `node_modules/@salutejs/plasma-new-hope/types/`.
> **Версия пакета: `@salutejs/plasma-web@1.623.0`**
> **Источник для проверки:** `ui-generator-pl/node_modules/@salutejs/plasma-web/types/components/`

> ⚠️ **Источник истины — MCP-сервер `plasma-web` (`@salutejs/sdds-mcp`), а не этот файл.**
> Этот файл — резервная офлайн-документация. Использовать только с явного разрешения пользователя при недоступном MCP.

---

## Частые галлюцинации (НЕ существуют — песочница падает)

| Выдуманное | Реальное |
|---|---|
| `HeadlineL/M/S` | `H1`…`H6`, `DsplL/M/S` |
| `Section` (компонент Plasma) | нет — styled-component или `<section>` |
| `Tag` | `Chip` |
| `Radio` | `Radiobox` |
| `Heading` / `Text` (без размера) | `H1`…`H6` / `TextL/M/S`, `BodyL/M/S` |
| `Card` с `padding`/`radius`/`shadow` | таких props нет — используйте `CardContent` или styled-обёртку |
| `Button fullWidth` | `Button stretching="filled"` |
| `Avatar src` | `Avatar url` |
| `Badge tone="success"` | `Badge view="positive"` (`tone` не существует) |
| `Button view="danger"` | `Button view="critical"` (`danger` не существует) |
| `Button view="outline"` | `Button view="secondary"` или `view="clear"` |

---

## Полный список компонентов (реальные экспорты v1.623.0)

```
Accordion, Attach, AudioPlayer, Autocomplete, Avatar, AvatarGroup,
Badge, Breadcrumbs, Button, ButtonGroup, Calendar, Card, CardContent,
CardInnerContent, Carousel, Cell, Checkbox, Chip, ChipGroup, CodeField,
Combobox, Counter, DatePicker, DateTimePicker, Divider, Drawer, Dropdown,
Dropzone, EmptyState, Grid, IconButton, Image, Indicator, Link, LinkButton,
List, Loader, Modal, NavigationDrawer, Notification, NumberInput, Overlay,
Pagination, Popover, Popup, PreviewGallery, Price, Progress,
ProgressBarCircular, Radiobox, Range, Rating, SSRProvider, Scrollbar,
Segment, Select, Sheet, Skeleton, Slider, Spinner, Steps, Switch, Table,
Tabs, TabItem, IconTabItem, TabsController, TextArea, TextField,
TextFieldGroup, TimePicker, Toast, Tooltip, Tour, Tree, Typography,
Upload, ViewContainer
```

---

## Typography

`H1`, `H2`, `H3`, `H4`, `H5`, `H6` — заголовки
`DsplL`, `DsplM`, `DsplS` — крупные дисплейные
`TextL`, `TextM`, `TextS`, `TextXS` — текст
`BodyL`, `BodyM`, `BodyS`, `BodyXS`, `BodyXXS` — body-текст

Общие props: `color?`, `noWrap?`, `breakWord?`, `isNumeric?`, `isItalic?`, `as?`. Текст — через `children`.

```jsx
<H3>Заголовок страницы</H3>
<TextM>Основной текст</TextM>
<BodyM color="var(--text-secondary)">Вторичный текст</BodyM>
```

---

## Card, CardContent, CardInnerContent

**Card** — контейнер для группировки контента.

| Prop | Type | Default | Описание |
|---|---|---|---|
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Размер |
| `view` | `string` | `'default'` | Вид |
| `orientation` | `'horizontal' \| 'vertical'` | — | Ориентация |
| `selected` | `boolean` | — | Выбрана |
| `backgroundType` | `'none' \| 'solid'` | — | Тип фона |

> У `Card` НЕТ props `padding`, `radius`, `shadow`.

**CardContent** — обёртка для медиа-контента (изображение, видео) с поддержкой `aspectRatio`. **НЕ добавляет padding** — не использовать для текста/кнопок.

| Prop | Type | Описание |
|---|---|---|
| `aspectRatio` | `string \| number` | Соотношение сторон (напр. `16/9`) |
| `orientation` | `'horizontal' \| 'vertical'` | Ориентация flex |

**CardInnerContent** — абсолютно позиционированный оверлей поверх `CardContent` (для текста поверх изображения). **Не для обычного контента.**

**Для обычного контента карточки** — используйте `styled CardBody` с padding:

```jsx
import { Card, CardContent, CardInnerContent } from '@salutejs/plasma-web'

// Карточка с обычным контентом (текст, кнопки):
const CardBody = styled.div`
  padding: 24px;
`
<Card style={{ background: 'var(--surface-solid-card)' }}>
  <CardBody>
    <H4>Заголовок</H4>
    <TextM>Контент карточки</TextM>
    <Button view="primary" text="Действие" style={{ marginTop: '16px' }} />
  </CardBody>
</Card>

// Медиа-карточка (изображение + оверлей):
<Card>
  <CardContent aspectRatio="16/9">
    <img src="/photo.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    <CardInnerContent style={{ padding: '16px', alignItems: 'flex-end' }}>
      <TextM>Текст поверх фото</TextM>
    </CardInnerContent>
  </CardContent>
</Card>
```

---

## Button

| Prop | Type | Default | Описание |
|---|---|---|---|
| `text` | `string` | — | Текст кнопки |
| `view` | `'default' \| 'primary' \| 'accent' \| 'secondary' \| 'clear' \| 'success' \| 'warning' \| 'critical' \| 'dark' \| 'black' \| 'white'` | `'default'` | Вид |
| `size` | `'xl' \| 'l' \| 'm' \| 's' \| 'xs' \| 'xxs'` | `'m'` | Размер |
| `stretching` | `'fixed' \| 'filled' \| 'auto'` | `'auto'` | Ширина (`filled` = 100%) |
| `disabled` | `boolean` | `false` | Заблокирована |
| `isLoading` | `boolean` | `false` | Состояние загрузки |
| `contentLeft` | `ReactNode` | — | Иконка слева |
| `contentRight` | `ReactNode` | — | Иконка справа |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML-тип |
| `onClick` | `() => void` | — | Обработчик |

> ❌ `view="danger"` — не существует, используйте `view="critical"`
> ❌ `view="outline"` — не существует, используйте `view="secondary"` или `view="clear"`
> ❌ `fullWidth` — не существует, используйте `stretching="filled"`

```jsx
<Button view="primary" size="m" text="Сохранить" />
<Button view="critical" size="m" text="Удалить" />
<Button view="secondary" stretching="filled" text="На всю ширину" />
```

---

## Badge

| Prop | Type | Default | Описание |
|---|---|---|---|
| `text` | `string` | — | Текст (альтернатива children) |
| `view` | `'default' \| 'accent' \| 'positive' \| 'warning' \| 'negative' \| 'dark' \| 'light'` | `'default'` | Цветовой вид |
| `size` | `'l' \| 'm' \| 's' \| 'xs'` | `'m'` | Размер |
| `pilled` | `boolean` | — | Скруглённый |
| `transparent` | `boolean` | — | С прозрачностью |
| `contentLeft` | `ReactNode` | — | Иконка слева |

> ❌ `tone` — не существует! Используйте `view`
> `view="positive"` = зелёный, `view="negative"` = красный, `view="warning"` = жёлтый

```jsx
<Badge view="positive" size="m">Активен</Badge>
<Badge view="negative" text="Ошибка" />
<Badge view="warning" size="s">Ожидает</Badge>
```

---

## Avatar

| Prop | Type | Default | Описание |
|---|---|---|---|
| `url` | `string` | — | Ссылка на фото (НЕ `src`) |
| `name` | `string` | — | ФИО — fallback-инициалы |
| `size` | `'s' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| 'fit'` | — | Размер |
| `shape` | `'circled' \| 'rounded'` | `'circled'` | Форма |
| `status` | `'active' \| 'inactive'` | — | Статус онлайн |
| `customText` | `string` | — | Кастомный текст вместо фото |

```jsx
<Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />
<Avatar name="Иван Иванов" size="m" status="active" />
```

---

## TextField

| Prop | Type | Default | Описание |
|---|---|---|---|
| `label` | `string` | — | Подпись |
| `placeholder` | `string` | — | Подсказка |
| `value` | `string` | — | Значение |
| `type` | `string` | `'text'` | Тип input |
| `size` | `'l' \| 'm' \| 's' \| 'xs'` | — | Размер |
| `view` | `string` | — | Вид (для статусов) |
| `required` | `boolean` | `false` | Обязательное |
| `disabled` | `boolean` | `false` | Заблокировано |
| `readOnly` | `boolean` | `false` | Только чтение |
| `id` / `name` | `string` | — | Атрибуты формы |
| `contentLeft` / `contentRight` | `ReactNode` | — | Иконки |
| `helperText` | `string` | — | Вспомогательный текст |

```jsx
<TextField id="email" name="email" label="Email" type="email" placeholder="you@example.com" required />
```

---

## Select

| Prop | Type | Описание |
|---|---|---|
| `value` | `string` | Выбранное значение |
| `onChange` | `(value, item) => void` | Обработчик изменения |
| `items` | `SelectItemOption[]` | Список опций |
| `label` | `string` | Подпись |
| `placeholder` | `string` | Подсказка |
| `size` | `'l' \| 'm' \| 's' \| 'xs'` | Размер |
| `view` | `'default' \| 'positive' \| 'warning' \| 'negative' \| 'accent' \| 'secondary'` | Вид |
| `multiselect` | `boolean` | Множественный выбор |
| `disabled` | `boolean` | Заблокирован |

```jsx
<Select
  label="Роль"
  value={role}
  onChange={(val) => setRole(val)}
  items={[{ value: 'admin', label: 'Администратор' }, { value: 'user', label: 'Пользователь' }]}
/>
```

---

## Checkbox

| Prop | Type | Описание |
|---|---|---|
| `id` | `string` | Идентификатор |
| `label` | `ReactNode` | Подпись |
| `description` | `ReactNode` | Описание |
| `checked` | `boolean` | Состояние |
| `disabled` | `boolean` | Заблокирован |
| `indeterminate` | `boolean` | Частично выбран |
| `size` | `string` | Размер |
| `view` | `string` | Вид |

```jsx
<Checkbox id="agree" name="agree" label="Согласен с условиями" />
```

---

## Switch

| Prop | Type | Описание |
|---|---|---|
| `label` | `ReactNode` | Подпись |
| `description` | `string` | Описание |
| `checked` | `boolean` | Состояние |
| `disabled` | `boolean` | Заблокирован |
| `size` | `string` | Размер |
| `view` | `string` | Вид |
| `labelPosition` | `'before' \| 'after'` | Расположение подписи |

```jsx
<Switch label="Уведомления" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
```

---

## Radiobox

> Компонент называется `Radiobox`, НЕ `Radio`.

```jsx
<Radiobox name="payment" value="card" label="Картой" />
<Radiobox name="payment" value="cash" label="Наличными" />
```

---

## Chip

| Prop | Type | Default | Описание |
|---|---|---|---|
| `text` | `string` | — | Текст |
| `view` | `string` | `'primary'` | Вид |
| `size` | `string` | `'m'` | Размер |
| `hasClear` | `boolean` | `true` | Показывать крестик |
| `onClickClose` | `(e) => void` | — | Нажатие на крестик |
| `contentLeft` / `contentRight` | `ReactNode` | — | Иконки |
| `disabled` | `boolean` | `false` | Заблокирован |

> `Tag` не существует — используйте `Chip`

```jsx
<Chip text="React" view="secondary" hasClear={false} />
```

---

## Modal

Экспортируется из `@salutejs/plasma-hope`.

| Prop | Type | Default | Описание |
|---|---|---|---|
| `onClose` | `() => void` | — | Обработчик закрытия |
| `withBlur` | `boolean` | — | Blur подложки |
| `closeOnEsc` | `boolean` | `true` | Закрыть по ESC |
| `closeOnOverlayClick` | `boolean` | `true` | Закрыть по клику вне |
| `isFocusTrapped` | `boolean` | `true` | Фокус только внутри |

> Prop открытия (`open` vs `isOpen`) — уточняйте через MCP, зависит от версии.

```jsx
const [isOpen, setIsOpen] = useState(false)
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <TextM>Содержимое</TextM>
</Modal>
```

---

## Tabs, TabItem

```jsx
import { Tabs, TabItem } from '@salutejs/plasma-web'
```

| Prop (TabItem) | Type | Описание |
|---|---|---|
| `selected` | `boolean` | Выбран |
| `disabled` | `boolean` | Неактивен |
| `contentRight` | `ReactNode` | Контент справа |
| `value` | `string \| number` | Значение |

```jsx
const [tab, setTab] = useState('first')
<Tabs>
  <TabItem selected={tab === 'first'} onClick={() => setTab('first')}>Первый</TabItem>
  <TabItem selected={tab === 'second'} onClick={() => setTab('second')}>Второй</TabItem>
</Tabs>
```

---

## Table

| Prop | Type | Описание |
|---|---|---|
| `columns` | `TableColumnData[]` | Колонки (`title`, `key`, `render?`) |
| `data` | `TableRowData[]` | Данные |
| `rowKey` | `string` | Ключ строки |

> Структура `columns`/`data` может меняться между версиями — **обязательно** проверяйте через MCP.

```jsx
const columns = [
  { title: 'Имя', key: 'name' },
  { title: 'Статус', key: 'status', render: (row) => <Badge view="positive">{row.status}</Badge> },
]
const data = [{ id: '1', name: 'Иван', status: 'Активен' }]
<Table columns={columns} data={data} rowKey="id" />
```

---

## Spinner

```jsx
<Spinner size={24} />
```

---

## EmptyState

```jsx
<EmptyState
  title={<H4>Ничего не найдено</H4>}
  description={<TextM>Попробуйте изменить фильтры</TextM>}
  action={<Button view="primary" text="Сбросить фильтры" />}
/>
```

---

## Breadcrumbs

```jsx
<Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты', href: '/projects' }, { label: 'Проект 1' }]} />
```

---

## Tooltip

```jsx
<Tooltip content="Подсказка" placement="top">
  <Button text="Наведи" />
</Tooltip>
```

---

## Импорт

```jsx
import {
  Card, CardContent, CardInnerContent,
  Button, Badge, Avatar,
  H1, H2, H3, H4, H5, H6,
  TextL, TextM, TextS,
  BodyL, BodyM, BodyS,
  TextField, TextArea, Select, Checkbox, Switch, Radiobox,
  Chip, Divider, Cell,
  Modal, Drawer, Toast, Spinner,
  Tabs, TabItem,
  Table, Pagination, EmptyState,
  Breadcrumbs, Tooltip,
} from '@salutejs/plasma-web'
```
