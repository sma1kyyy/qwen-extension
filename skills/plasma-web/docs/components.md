# Plasma Web Component Library

## Цель документа

Этот файл описывает компонентную модель Salute Plasma Web в формате, удобном для LLM.

> ⚠️ **Источник истины — MCP-сервер `plasma-web` (`@salutejs/sdds-mcp`), а не этот файл.**
> Перед использованием компонента/props проверяйте их через `list_components`, `get_component_props`, `get_component`. Таблицы ниже — офлайн-подсказка и конвенции; при расхождении с MCP актуальны данные MCP. Не поддерживайте этот каталог вручную при каждом обновлении Plasma — полагайтесь на MCP.

## Быстрый справочник

### Layout (4)
`Card`, `Cell`, `Divider`, `Section`

### Typography (9)
`HeadlineL`, `HeadlineM`, `HeadlineS`, `TextL`, `TextM`, `TextS`, `BodyL`, `BodyM`, `BodyS`

### Actions (3)
`Button`, `IconButton`, `LinkButton`

### Forms (6)
`TextField`, `TextArea`, `Select`, `Checkbox`, `Switch`, `Radio`

### Containers (5)
`Avatar`, `Badge`, `Progress`, `Tag`, `Tooltip`

### Data (3)
`Table`, `Pagination`, `EmptyState`

### Overlay (5)
`Overlay`, `Modal`, `Drawer`, `Popup`, `Toast`

### Navigation (2)
`Tabs`, `Breadcrumbs`

### Feedback (1)
`Spinner`

## Общие правила

### Импорт

Используйте единый импорт из пакета Plasma Web:

```jsx
import { Button, Card, Text } from '@salutejs/plasma-web'
```

Не импортируйте компоненты из других UI-kit библиотек, если пользователь явно не просит миграцию.

### Стиль кода

- Используйте React functional components.
- Компоненты называйте в `PascalCase`: `LoginForm`, `ProductCard`, `ConfirmDeleteModal`.
- Props пишите в `camelCase`.
- Для простых static UI не добавляйте hooks.
- Для управляемого Modal используйте `useState`.
- Для списков используйте `.map()` и стабильный `key`.
- Не используйте inline style, если есть layout props.

### Токены

#### Размеры

```ts
size: 'xs' | 's' | 'm' | 'l' | 'xl'
```

Default: `m`.

#### Цветовые тона

```ts
tone: 'neutral' | 'success' | 'warning' | 'danger' | 'info'
```

Default: `neutral`.

#### Варианты кнопок

```ts
view: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link'
```

Default: `primary`.

#### Отступы

```ts
padding: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'
```

Default: `m`.

## Layout-компоненты

### Card

Назначение: контейнер для группировки контента.

Props:

| Prop       | Type                | Default | Описание            |
| ---------- | ------------------- | ------- | ------------------- |
| `padding`  | `padding`           | `'m'`   | Внутренние отступы. |
| `radius`   | `'s' \| 'm' \| 'l'` | `'m'`   | Скругление.         |
| `shadow`   | `boolean`           | `true`  | Показывать тень.    |
| `children` | `ReactNode`         | —       | Контент.            |

Пример:

```jsx
<Card padding="l" radius="l" shadow={true}>
  <TextM>Контент внутри карточки</TextM>
</Card>
```

### Cell

Назначение: элемент списка или группы.

Props:

| Prop       | Type        | Default | Описание            |
| ---------- | ----------- | ------- | ------------------- |
| `padding`  | `padding`   | `'m'`   | Внутренние отступы. |
| `before`   | `ReactNode` | —       | Контент слева.      |
| `after`    | `ReactNode` | —       | Контент справа.     |
| `children` | `ReactNode` | —       | Основной контент.   |

Пример:

```jsx
<Cell before={<Avatar url="/avatar.jpg" name="Иван" />} after={<Badge tone="success">Активен</Badge>}>
  <TextM>Иван Иванов</TextM>
</Cell>
```

### Divider

Назначение: горизонтальная линия-разделитель.

Props:

| Prop       | Type        | Default | Описание              |
| ---------- | ----------- | ------- | --------------------- |
| `padding`  | `padding`   | `'m'`   | Отступы сверху/снизу. |
| `children` | `ReactNode` | —       | Текст разделителя.    |

Пример:

```jsx
<Divider padding="m">Раздел</Divider>
```

### Section

Назначение: смысловой блок внутри страницы.

Props:

| Prop       | Type        | Default | Описание            |
| ---------- | ----------- | ------- | ------------------- |
| `padding`  | `padding`   | `'m'`   | Внутренние отступы. |
| `header`   | `ReactNode` | —       | Заголовок секции.   |
| `children` | `ReactNode` | —       | Контент.            |

Пример:

```jsx
<Section header={<HeadlineS>Настройки</HeadlineS>} padding="l">
  <TextM>Контент секции</TextM>
</Section>
```

## Typography

### HeadlineL

Назначение: крупный заголовок.

Props:

| Prop       | Type        | Default     | Описание      |
| ---------- | ----------- | ----------- | ------------- |
| `tone`     | `tone`      | `'neutral'` | Цветовой тон. |
| `children` | `ReactNode` | —           | Текст.        |

Пример:

```jsx
<HeadlineL tone="neutral">Добро пожаловать</HeadlineL>
```

### HeadlineM

Назначение: средний заголовок.

Props:

| Prop       | Type        | Default     | Описание      |
| ---------- | ----------- | ----------- | ------------- |
| `tone`     | `tone`      | `'neutral'` | Цветовой тон. |
| `children` | `ReactNode` | —           | Текст.        |

Пример:

```jsx
<HeadlineM tone="neutral">Профиль пользователя</HeadlineM>
```

### HeadlineS

Назначение: мелкий заголовок.

Props:

| Prop       | Type        | Default     | Описание      |
| ---------- | ----------- | ----------- | ------------- |
| `tone`     | `tone`      | `'neutral'` | Цветовой тон. |
| `children` | `ReactNode` | —           | Текст.        |

Пример:

```jsx
<HeadlineS tone="neutral">Дополнительная информация</HeadlineS>
```

### TextL

Назначение: крупный текст.

Props:

| Prop       | Type        | Default     | Описание      |
| ---------- | ----------- | ----------- | ------------- |
| `tone`     | `tone`      | `'neutral'` | Цветовой тон. |
| `children` | `ReactNode` | —           | Текст.        |

Пример:

```jsx
<TextL tone="neutral">Основной текст страницы</TextL>
```

### TextM

Назначение: средний текст.

Props:

| Prop       | Type        | Default     | Описание      |
| ---------- | ----------- | ----------- | ------------- |
| `tone`     | `tone`      | `'neutral'` | Цветовой тон. |
| `children` | `ReactNode` | —           | Текст.        |

Пример:

```jsx
<TextM tone="neutral">Описание элемента</TextM>
```

### TextS

Назначение: мелкий текст.

Props:

| Prop                                      | Type   | Default                   | Описание |
| ----------------------------------------- | ------ | ------------------------- | -------- |
| `tone`                                    | `tone` | `'neutral'` Цветовой тон. |
| `children` children    —           Текст. |

Пример:

```jsx
<TextS tone="neutral">Вспомогательный текст</TextS>
```

### BodyL / BodyM / BodyS

Назначение: абзацы текста.

Props: как у TextL/M/S.

## Actions

### Button

Назначение: кнопка для основного или вторичного действия.

Props:

| Prop        Type                                                                     Default     Описание                                                            |
| ----------- ------------------------------------------------------------------------ ----------- ------------------------------------------------------------------- |
| `view`      `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'link'` `'primary'` Визуальный стиль.                                                   |
| `size`      `'s' \| 'm' \| 'l'`                                                   `'m'`      Размер.                                                             |
| `type`      `'button' \| 'submit' \| 'reset'                                        `'button'`  Тип кнопки.                                                         |
| `disabled`  boolean                                                                false     Заблокирована ли кнопка.                                            |
| `loading   boolean                                                                false     Показывать состояние загрузки.                                      |
| fullWidth   boolean                                                                false     Растянуть на всю ширину.                                            |
| onClick     () => void                                                             —           Обработчик клика. Не добавлять пустой обработчик без необходимости. |
| text        string                                                                 —           Текст кнопки.                                                      |

Правила:

- Для destructive action используйте `view="danger"`.
- Для главного действия на странице используйте view="primary"`.
- Для отмены используйте view="secondary"` или view="ghost"`.

Пример:

```jsx
<Button view="danger" size="m" text="Удалить" />
```

### IconButton

Назначение: компактная кнопка с иконкой.

Props:

| Prop         Type                   Default   Описание                        |
| ------------ ---------------------- --------- ------------------------------- |
| aria-label   string               —         Обязательная доступная подпись. |
| view         Button['view']       `'ghost'` Стиль.                          |
| size         `'s' \| 'm' \| 'l'    `'m'`    Размер.                         |
| disabled     boolean              false     Заблокирована ли кнопка.        |

Пример:

```jsx
<IconButton aria-label="Удалить" view="ghost" size="m">
  {/* иконка */}
</IconButton>
```

### LinkButton

Назна��ение: кнопка в виде ссылки.

Props:

| Prop       Type        Default   Описание                      |
| ---------- ----------- --------- ----------------------------- |
| href       string    —         URL.                          |
| view       Button['view'] `'link' Стиль.                          |
| text       string    —           Текст ссылки.                 |

Пример:

```jsx
<LinkButton href="/profile" text="Перейти в профиль" />
```

## Forms

### TextField

Назначение: однострочное поле ввода.

Props:

| Prop           Type                                                                        Default  Описание                       |
| -------------- --------------------------------------------------------------------------- -------- ------------------------------ |
| id             string                                                                    —        ID для связи с label.          |
| name           string                                                                    —        Имя поля.                      |
| label          string                                                                    —        Видимая подпись.               |
| type           `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` `'text'` Тип input.                     |
| placeholder    string                                                                    —        Подсказка.                     |
| value          string \| number                                                          —        Значение для controlled input. |
| defaultValue   string \| number                                                          —        Значение по умолчанию.         |
| required       boolean                                                                   false    Обязательное поле.             |
| disabled       boolean                                                                   false    Заблокировано.                 |

Пример:

```jsx
<TextField id="email" name="email" label="Email" type="email" placeholder="you@example.com" required />
```

### TextArea

Назначение: многострочное поле.

Props: как у TextField, дополнительно:

| Prop     Type                                   Default      Описание           |
| -------- -------------------------------------- ------------ ------------------ |
| rows     number                               4            Количество строк.  |

Пример:

```jsx
<TextArea id="description" name="description" label="Описание" rows={4} />
```

### Select

Назначение: выбор одного значения из списка.

Props:

| Prop           Type                                 Default Описание           |
| -------------- ------------------------------------ ------- ------------------ |
| id             string                             —       ID.                |
| name           string                             —       Имя поля.          |
| label          string                             —       Подпись.           |
| placeholder    string                             —       Placeholder.       |
| options        { label: string; value: string }[]  []      Список опций.      |
| value          string                             —       Controlled value.  |
| defaultValue   string                             —       Default value.     |

Пример:

```jsx
<Select
  id="role"
  name="role"
  label="Роль"
  placeholder="Выберите роль"
  options={[
    { label: 'Администратор', value: 'admin' },
    { label: 'Пользователь', value: 'user' }
  ]}
/>
```

### Checkbox

Назначение: boolean-переключатель.

Props:

| Prop             Type      Default Описание          |
| ---------------- --------- ------- ----------------- |
| id               string    —       ID.               |
| name             string    —       Имя.              |
| label            string    —       Подпись.          |
| checked          boolean   —       Controlled state. |
| defaultChecked   boolean   false   Default state.    |

Пример:

```jsx
<Checkbox id="agree" name="agree" label="Согласен с условиями" />
```

### Switch

Назначение: переключатель настройки.

Props:

| Prop             Type      Default Описание          |
| ---------------- --------- ------- ----------------- |
| id               string    —       ID.               |
| name             string    —       Имя.              |
| label            string    —       Подпись.          |
| checked          boolean   —       Controlled state. |

Пример:

```jsx
<Switch id="notifications" name="notifications" label="Уведомления" />
```

### Radio

Назначение: переключатель выбора одного варианта.

Props:

| Prop       Type                                        Default     Описание                               |
| ---------- ------------------------------------------- ----------- -------------------------------------- |
| name       string                                      —           Имя группы.                           |
| value      string                                      —           Значение варианта.                    |
| label      string                                      —           Подпись варианта.                     |

Пример:

```jsx
<Radio name="payment" value="card" label="Картой" />
<Radio name="payment" value="cash" label="Наличными" />
```

## Containers and content

### Avatar

Назначение: аватар пользователя.

Props:

| Prop   Type     Default   Описание                   |
| ------ -------- --------- -------------------------- |
| url    string   —         URL изображения.           |
| name   string   —         Имя для fallback initials. |
| size   `'s'\|"m'\|"l'\|"xl"` `'m'    Размер.                    |

Пример:

```jsx
<Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />
```

### Badge

Назначение: маленькая метка статуса.

Props:

| Prop       Type           Default     Описание      |
| ---------- -------------- ----------- ------------- |
| tone       tone           `'neutral'` Цветовой тон. |
| size       `'s'\|"m'\|"l"` `'m'      Размер.       |

Пример:

```jsx
<Badge tone="success" size="m">Активен</Badge>
```

### Progress

Назначение: индикатор прогресса.

Props:

| Prop        Type     Default     Описание           |
| ----------- -------- ----------- ------------------ |
| value       number   0           Текущее значение (0-100).|
| max         number   100         Максимальное значение.|


Пример:

```jsx
<Progress value={75} max={100} />
```

### Tag

Назначение: метка для категорий или фильтров.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
text string - Текст метки.
view `'primary'\|"secondary'\|"outline'\|"ghost'\|"danger'\|"link"` `'primary' Стиль.
size `'s'\|"m'\|"l"` `'m' Размер.

Пример:

```jsx
<Tag text="Кат��гория" view="outline" size="s" />
```

### Tooltip

Назначение: краткая подсказка при наведении/фокусе.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
content ReactNode - Текст подсказки.
placement `'top'\|"right'\|"bottom'\|"left"` `'top' Позиция.
children ReactNode - Целевой элемент.

Пример:

```jsx
<Tooltip content="Информация о пользователе">
  <InfoIcon />
</Tooltip>
```

## Data display

### Table

Назначение: табличное отображение данных.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
columns { key: string; title: string; align?: 'start'\|"center'\|"end'}[] [] Колонки.
data Record<string, ReactNode>[] [] Строки.
rowKey string `'id' Поле уникального ключа.
striped boolean false Полосатые строки.
compact boolean false Компактный режим.

Пример:

```jsx
<Table
  columns={[
    { key: 'name', title: 'Название', align: 'start' },
    { key: 'price', title: 'Цена', align: 'end' }
  ]}
  data={[
    { id: '1', name: 'Pro Plan', price: '990 ₽' },
    { id: '2', name: 'Basic Plan', price: '490 ₽' }
  ]}
  rowKey="id"
/>
```

### Pagination

Назначение: навигация по страницам данных.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
page number 1 Текущая страница.
totalPages number - Всего страниц.
onPageChange (page: number) => void - Обработчик изменения.

Пример:

```jsx
<Pagination page={1} totalPages={5} onPageChange={(page) => console.log(page)} />
```

### EmptyState

Назначение: состояние пустого списка.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
title string - Заголовок.
description string - Описание.
action ReactNode - CTA кнопка.

Пример:

```jsx
<EmptyState
  title="Проектов пока нет"
  description="Создайте первый проект, ч��обы начать работу"
  action={<Button view="primary" text="Создать проект" />}
/>
```

## Overlay and feedback

### Overlay

Назначение: затемненный слой для modal/drawer.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
open boolean - Открыт ли overlay.
onClose () => void - Закрытие.
children ReactNode - `Modal` или другой overlay-content.

Правило: `Modal` должен быть обернут в `Overlay`.

Пример:

```jsx
<Overlay open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal title="Подтверждение">
    <TextM>Вы уверены?</TextM>
  </Modal>
</Overlay>
```

### Modal

Назначение: диалоговое окно поверх страницы.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
open boolean - Открыт ли модал.
onClose () => void - Закрытие.
title string - Заголовок.
footer ReactNode - Кнопки действий.
children ReactNode - Контент.

Пример:

```jsx
<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Подтверждение">
  <TextM>Вы уверены?</TextM>
  <footer style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
    <Button view="secondary" text="Отмена" onClick={() => setIsOpen(false)} />
    <Button view="danger" text="Удалить" onClick={handleDelete} />
  </footer>
</Modal>
```

### Drawer

Назначение: боковая панель.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
open boolean - Открыта ли панель.
onClose () => void - Закрытие.
position `'left'\|"right"` `'right' Сторона.
title string - Заголовок.
children ReactNode - Контент.

Пример:

```jsx
<Drawer open={isOpen} onClose={() => setIsOpen(false)} position="right" title="Настройки">
  <TextM>Контент боковой панели</TextM>
</Drawer>
```

### Popup

Назначение: всплывающее окно над элементом.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
open boolean - Открыт ли popup.
onClose () => void - Закрытие.
target HTMLElement - Целевой элемент.
placement `'top'\|"right'\|"bottom'\|"left"` `'bottom' Позиция.
children ReactNode - Контент.

Пример:

```jsx
<Popup open={isOpen} onClose={() => setIsOpen(false)} target={ref.current} placement="bottom">
  <TextM>Всплывающая подсказка</TextM>
</Popup>
```

### Toast

Назначение: короткое уведомление.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
open boolean - Открыт ли toast.
onClose () => void - Закрытие.
tone `'success'\|"warning'\|"danger'\|"info"` `'info' Тип уведомления.
title string - Заголовок.
children ReactNode - Текст.

Пример:

```jsx
<Toast open={isOpen} onClose={() => setIsOpen(false)} tone="success" title="Успешно">
  Данные сохранены
</Toast>
```

## Navigation

### Tabs

Назначение: переключение между секци��ми.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
items { value: string; title: ReactNode }[] - Вкладки.
value string - Активная вкладка.
defaultValue string - Активная вкладка по умолчанию.
onChange (value: string) => void - Обработчик изменения.

Пример:

```jsx
<Tabs
  items={[
    { value: 'profile', title: <HeadlineS>Профиль</HeadlineS> },
    { value: 'settings', title: <HeadlineS>Настройки</HeadlineS> }
  ]}
  value={activeTab}
  onChange={(value) => setActiveTab(value)}
/>
```

### Breadcrumbs

Назначение: навигация по иерархии страниц.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
items { label: string; href?: string; onClick?: () => void }[] - Массив элементов хлебных крошек.
separator string `'/' Сепаратор между элементами.
maxVisible number - Максимальное количество видимых элементов.
onSelect (item: { label: string; href?: string }) => void - Обработчик клика по элементу.

Пример:

```jsx
<Breadcrumbs
  items={[
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Электроника' }
  ]}
/>
```

### Spinner

Назначение: индикатор загрузки.

Props:

**Prop** **Type** **Default** **Описание**
--- --- --- ---
size `'s' | 'm' | 'l'` 'm' Размер.
label string 'Загрузка' Доступная подпись.

Пример:

```jsx
<Spinner size="m" label="Загрузка данных" />
```