# Prisma UI Component Library

## Цель документа

Этот файл описывает компонентную модель Prisma UI в формате, удобном для LLM. Агент должен использовать эти компоненты и props при генерации UI-кода.

> Важно: если фактическая внутренняя документация Prisma UI отличается от этого контракта, приоритет имеет внутренняя документация команды. Этот файл служит базовой спецификацией для стабильной генерации UI.

## Быстрый справочник

### Layout (5)
`Page`, `Section`, `Stack`, `Inline`, `Grid`

### Typography (3)
`Heading`, `Text`, `Link`

### Actions (2)
`Button`, `IconButton`

### Forms (7)
`Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`

### Containers (4)
`Card`, `Badge`, `Avatar`, `Alert`

### Data (3)
`Table`, `Pagination`, `EmptyState`

### Overlay (6)
`Overlay`, `Modal`, `Drawer`, `Tooltip`, `Toast`, `Spinner`

### Navigation (2)
`Tabs`, `Breadcrumbs`

## Общие правила

### Импорт

Используйте единый импорт из пакета Prisma UI:

```jsx
import { Button, Card, Text } from '@prisma-ui/react'
```

Не импортируйте компоненты из других UI-kit библиотек, если пользователь явно не просит миграцию.

### Стиль кода

- Используйте React functional components.
- Компоненты называйте в `PascalCase`: `LoginForm`, `ProductCard`, `ConfirmDeleteModal`.
- Props пишите в `camelCase`.
- Для простых static UI не добавляйте hooks.
- Для управляемого Modal используйте `useState`.
- Для списков используйте `.map()` и стабильный `key`.
- Не используйте inline style, если есть layout props (`gap`, `padding`, `align`, `justify`, `columns`).

### Токены

#### Размеры

```ts
size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

Default: `md`.

#### Цветовые тона

```ts
tone: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'muted'
```

Default: `neutral`.

#### Варианты кнопок и интерактивных элементов

```ts
variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link'
```

Default: `primary`.

#### Отступы и gaps

```ts
spacing: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

Default: `md`.

## Layout-компоненты

### Page

Назначение: корневой контейнер страницы.

Props:

| Prop          | Type                                     | Default | Описание                                           |
| ------------- | ---------------------------------------- | ------- | -------------------------------------------------- |
| `title`       | `string`                                 | —       | Заголовок страницы, если нужен стандартный header. |
| `description` | `string`                                 | —       | Подзаголовок/описание страницы.                    |
| `maxWidth`    | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'`  | Максимальная ширина контента.                      |
| `padding`     | `spacing`                                | `'lg'`  | Внутренние отступы страницы.                       |
| `children`    | `ReactNode`                              | —       | Контент страницы.                                  |

Пример:

```jsx
<Page title="Каталог" description="Список доступных товаров" maxWidth="xl">
  <Section>
    <Text>Контент страницы</Text>
  </Section>
</Page>
```

### Section

Назначение: смысловой блок внутри страницы.

Props:

| Prop          | Type        | Default | Описание            |
| ------------- | ----------- | ------- | ------------------- |
| `title`       | `string`    | —       | Заголовок секции.   |
| `description` | `string`    | —       | Описание секции.    |
| `padding`     | `spacing`   | `'md'`  | Внутренние отступы. |
| `children`    | `ReactNode` | —       | Контент.            |

### Stack

Назначение: вертикальная компоновка элементов.

Props:

| Prop       | Type                                        | Default     | Описание                               |
| ---------- | ------------------------------------------- | ----------- | -------------------------------------- |
| `gap`      | `spacing`                                   | `'md'`      | Расстояние между дочерними элементами. |
| `align`    | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Выравнивание по горизонтали.           |
| `children` | `ReactNode`                                 | —           | Элементы.                              |

Пример:

```jsx
<Stack gap="sm">
  <Heading level={2}>Профиль</Heading>
  <Text tone="muted">Настройки аккаунта</Text>
</Stack>
```

### Inline

Назначение: горизонтальная компоновка элементов.

Props:

| Prop       | Type                                        | Default    | Описание                      |
| ---------- | ------------------------------------------- | ---------- | ----------------------------- |
| `gap`      | `spacing`                                   | `'md'`     | Расстояние между элементами.  |
| `align`    | `'start' \| 'center' \| 'end' \| 'stretch'` | `'center'` | Выравнивание по вертикали.    |
| `justify`  | `'start' \| 'center' \| 'end' \| 'between'` | `'start'`  | Распределение по горизонтали. |
| `wrap`     | `boolean`                                   | `false`    | Разрешить перенос элементов.  |
| `children` | `ReactNode`                                 | —          | Элементы.                     |

### Grid

Назначение: сетка карточек/колонок.

Props:

| Prop       | Type                                                  | Default | Описание                   |
| ---------- | ----------------------------------------------------- | ------- | -------------------------- |
| `columns`  | `number \| { sm?: number; md?: number; lg?: number }` | `1`     | Количество колонок.        |
| `gap`      | `spacing`                                             | `'md'`  | Расстояние между ячейками. |
| `children` | `ReactNode`                                           | —       | Элементы сетки.            |

Пример:

```jsx
<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

## Typography

### Heading

Назначение: заголовки.

Props:

| Prop       | Type                         | Default            | Описание                         |
| ---------- | ---------------------------- | ------------------ | -------------------------------- |
| `level`    | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2`                | Семантический уровень заголовка. |
| `size`     | `size`                       | зависит от `level` | Визуальный размер.               |
| `children` | `ReactNode`                  | —                  | Текст.                           |

### Text

Назначение: обычный текст, подписи, цены, описания.

Props:

| Prop       | Type                                            | Default     | Описание       |
| ---------- | ----------------------------------------------- | ----------- | -------------- |
| `size`     | `size`                                          | `'md'`      | Размер текста. |
| `tone`     | `tone`                                          | `'neutral'` | Цветовой тон.  |
| `weight`   | `'regular' \| 'medium' \| 'semibold' \| 'bold'` | `'regular'` | Толщина.       |
| `as`       | `'p' \| 'span' \| 'small'`                      | `'p'`       | HTML-тег.      |
| `children` | `ReactNode`                                     | —           | Текст.         |

### Link

Назначение: ссылка.

Props:

| Prop       | Type        | Default   | Описание                      |
| ---------- | ----------- | --------- | ----------------------------- |
| `href`     | `string`    | —         | URL.                          |
| `tone`     | `tone`      | `'brand'` | Цветовой тон.                 |
| `external` | `boolean`   | `false`   | Открывать как внешнюю ссылку. |
| `children` | `ReactNode` | —         | Текст ссылки.                 |

## Actions

### Button

Назначение: кнопка для основного или вторичного действия.

Props:

| Prop        | Type                                                                     | Default     | Описание                                                            |
| ----------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'link'` | `'primary'` | Визуальный стиль.                                                   |
| `size`      | `'sm' \| 'md' \| 'lg'`                                                   | `'md'`      | Размер.                                                             |
| `type`      | `'button' \| 'submit' \| 'reset'`                                        | `'button'`  | Тип кнопки.                                                         |
| `disabled`  | `boolean`                                                                | `false`     | Заблокирована ли кнопка.                                            |
| `loading`   | `boolean`                                                                | `false`     | Показывать состояние загрузки.                                      |
| `fullWidth` | `boolean`                                                                | `false`     | Растянуть на всю ширину.                                            |
| `onClick`   | `() => void`                                                             | —           | Обработчик клика. Не добавлять пустой обработчик без необходимости. |
| `children`  | `ReactNode`                                                              | —           | Текст/контент кнопки.                                               |

Правила:

- Для destructive action используйте `variant="danger"`.
- Для главного действия на странице используйте `variant="primary"`.
- Для отмены используйте `variant="secondary"` или `variant="ghost"`.

Пример:

```jsx
<Button variant="danger" size="md">Удалить</Button>
```

### IconButton

Назначение: компактная кнопка с иконкой.

Props:

| Prop         | Type                   | Default   | Описание                        |
| ------------ | ---------------------- | --------- | ------------------------------- |
| `aria-label` | `string`               | —         | Обязательная доступная подпись. |
| `variant`    | `Button['variant']`    | `'ghost'` | Стиль.                          |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`    | Размер.                         |
| `disabled`   | `boolean`              | `false`   | Заблокирована ли кнопка.        |
| `children`   | `ReactNode`            | —         | Иконка.                         |

## Forms

### Form

Назначение: контейнер формы.

Props:

| Prop       | Type              | Default | Описание                                                |
| ---------- | ----------------- | ------- | ------------------------------------------------------- |
| `onSubmit` | `(event) => void` | —       | Обработчик submit. Не добавляйте, если форма статичная. |
| `children` | `ReactNode`       | —       | Поля и действия формы.                                  |

Правила:

- Группируйте поля через `Stack`.
- Submit-кнопка должна иметь `type="submit"`.
- Если нет реального submit-обработчика, не пишите фиктивный `onSubmit`.

### Input

Назначение: однострочное поле ввода.

Props:

| Prop           | Type                                                                        | Default  | Описание                       |
| -------------- | --------------------------------------------------------------------------- | -------- | ------------------------------ |
| `id`           | `string`                                                                    | —        | ID для связи с label.          |
| `name`         | `string`                                                                    | —        | Имя поля.                      |
| `label`        | `string`                                                                    | —        | Видимая подпись.               |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Тип input.                     |
| `placeholder`  | `string`                                                                    | —        | Подсказка.                     |
| `value`        | `string \| number`                                                          | —        | Значение для controlled input. |
| `defaultValue` | `string \| number`                                                          | —        | Значение по умолчанию.         |
| `required`     | `boolean`                                                                   | `false`  | Обязательное поле.             |
| `disabled`     | `boolean`                                                                   | `false`  | Заблокировано.                 |
| `error`        | `string`                                                                    | —        | Текст ошибки.                  |
| `helperText`   | `string`                                                                    | —        | Дополнительная подсказка.      |

Пример:

```jsx
<Input id="email" name="email" label="Email" type="email" placeholder="you@example.com" required />
```

### Textarea

Назначение: многострочное поле.

Props: как у `Input`, дополнительно:

| Prop     | Type                                   | Default      | Описание           |
| -------- | -------------------------------------- | ------------ | ------------------ |
| `rows`   | `number`                               | `4`          | Количество строк.  |
| `resize` | `'none' \| 'vertical' \| 'horizontal'` | `'vertical'` | Разрешение resize. |

### Select

Назначение: выбор одного значения из списка.

Props:

| Prop           | Type                                 | Default | Описание           |
| -------------- | ------------------------------------ | ------- | ------------------ |
| `id`           | `string`                             | —       | ID.                |
| `name`         | `string`                             | —       | Имя поля.          |
| `label`        | `string`                             | —       | Подпись.           |
| `placeholder`  | `string`                             | —       | Placeholder.       |
| `options`      | `{ label: string; value: string }[]` | `[]`    | Список опций.      |
| `value`        | `string`                             | —       | Controlled value.  |
| `defaultValue` | `string`                             | —       | Default value.     |
| `required`     | `boolean`                            | `false` | Обязательное поле. |
| `error`        | `string`                             | —       | Ошибка.            |

Пример:

```jsx
<Select
  id="role"
  name="role"
  label="Роль"
  placeholder="Выберите роль"
  options={[{ label: 'Администратор', value: 'admin' }, { label: 'Пользователь', value: 'user' }]}
/>
```

### Checkbox

Назначение: boolean-переключатель.

Props:

| Prop             | Type      | Default | Описание          |
| ---------------- | --------- | ------- | ----------------- |
| `id`             | `string`  | —       | ID.               |
| `name`           | `string`  | —       | Имя.              |
| `label`          | `string`  | —       | Подпись.          |
| `checked`        | `boolean` | —       | Controlled state. |
| `defaultChecked` | `boolean` | `false` | Default state.    |
| `disabled`       | `boolean` | `false` | Заблокирован.     |

### RadioGroup

Назначение: выбор одного варианта из нескольких.

Props:

| Prop           | Type                                 | Default      | Описание          |
| -------------- | ------------------------------------ | ------------ | ----------------- |
| `name`         | `string`                             | —            | Имя группы.       |
| `label`        | `string`                             | —            | Подпись группы.   |
| `options`      | `{ label: string; value: string }[]` | `[]`         | Варианты.         |
| `value`        | `string`                             | —            | Controlled value. |
| `defaultValue` | `string`                             | —            | Default value.    |
| `direction`    | `'vertical' \| 'horizontal'`         | `'vertical'` | Направление.      |

### Switch

Назначение: переключатель настройки.

Props:

| Prop             | Type      | Default | Описание          |
| ---------------- | --------- | ------- | ----------------- |
| `id`             | `string`  | —       | ID.               |
| `name`           | `string`  | —       | Имя.              |
| `label`          | `string`  | —       | Подпись.          |
| `checked`        | `boolean` | —       | Controlled state. |
| `defaultChecked` | `boolean` | `false` | Default state.    |
| `disabled`       | `boolean` | `false` | Заблокирован.     |

## Containers and content

### Card

Назначение: контейнер для группировки контента.

Props:

| Prop          | Type                             | Default | Описание            |
| ------------- | -------------------------------- | ------- | ------------------- |
| `title`       | `string`                         | —       | Заголовок карточки. |
| `description` | `string`                         | —       | Описание карточки.  |
| `footer`      | `ReactNode`                      | —       | Нижняя область.     |
| `padding`     | `spacing`                        | `'md'`  | Внутренние отступы. |
| `radius`      | `'sm' \| 'md' \| 'lg' \| 'xl'`   | `'md'`  | Скругление.         |
| `shadow`      | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'`  | Тень.               |
| `children`    | `ReactNode`                      | —       | Контент.            |

Пример:

```jsx
<Card title="Профиль" description="Основные данные пользователя" padding="lg">
  <Text>Контент внутри карточки</Text>
</Card>
```

### Badge

Назначение: маленькая метка статуса.

Props:

| Prop       | Type           | Default     | Описание      |
| ---------- | -------------- | ----------- | ------------- |
| `tone`     | `tone`         | `'neutral'` | Цветовой тон. |
| `size`     | `'sm' \| 'md'` | `'md'`      | Размер.       |
| `children` | `ReactNode`    | —           | Текст.        |

### Avatar

Назначение: аватар пользователя.

Props:

| Prop   | Type     | Default   | Описание                   |
| ------ | -------- | --------- | -------------------------- |
| `src`  | `string` | —         | URL изображения.           |
| `name` | `string` | —         | Имя для fallback initials. |
| `size` | `size`   | `'md'`    | Размер.                    |
| `tone` | `tone`   | `'brand'` | Тон fallback.              |

### Alert

Назначение: сообщение о состоянии, ошибке или предупреждении.

Props:

| Prop       | Type                                           | Default  | Описание       |
| ---------- | ---------------------------------------------- | -------- | -------------- |
| `tone`     | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Тип сообщения. |
| `title`    | `string`                                       | —        | Заголовок.     |
| `children` | `ReactNode`                                    | —        | Описание.      |

## Data display

### Table

Назначение: табличное отображение данных.

Props:

| Prop      | Type                                                                     | Default | Описание                |
| --------- | ------------------------------------------------------------------------ | ------- | ----------------------- |
| `columns` | `{ key: string; title: string; align?: 'start' \| 'center' \| 'end' }[]` | `[]`    | Колонки.                |
| `data`    | `Record<string, ReactNode>[]`                                            | `[]`    | Строки.                 |
| `rowKey`  | `string`                                                                 | `'id'`  | Поле уникального ключа. |
| `striped` | `boolean`                                                                | `false` | Полосатые строки.       |
| `compact` | `boolean`                                                                | `false` | Компактный режим.       |

Пример:

```jsx
<Table
  columns={[{ key: 'name', title: 'Название' }, { key: 'price', title: 'Цена' }]}
  data={[{ id: '1', name: 'Pro Plan', price: '990 ₽' }]}
  rowKey="id"
/>
```

### Pagination

Назначение: навигация по страницам данных.

Props:

| Prop           | Type                     | Default | Описание              |
| -------------- | ------------------------ | ------- | --------------------- |
| `page`         | `number`                 | `1`     | Текущая страница.     |
| `totalPages`   | `number`                 | —       | Всего страниц.        |
| `onPageChange` | `(page: number) => void` | —       | Обработчик изменения. |

### EmptyState

Назначение: состояние пустого списка.

Props:

| Prop          | Type        | Default | Описание   |
| ------------- | ----------- | ------- | ---------- |
| `title`       | `string`    | —       | Заголовок. |
| `description` | `string`    | —       | Описание.  |
| `action`      | `ReactNode` | —       | CTA.       |

## Overlay and feedback

### Overlay

Назначение: затемненный слой для modal/drawer.

Props:

| Prop       | Type         | Default | Описание                            |
| ---------- | ------------ | ------- | ----------------------------------- |
| `open`     | `boolean`    | —       | Открыт ли overlay.                  |
| `onClose`  | `() => void` | —       | Закрытие.                           |
| `children` | `ReactNode`  | —       | `Modal` или другой overlay-content. |

Правило: `Modal` должен быть обернут в `Overlay`.

### Modal

Назначение: диалоговое окно поверх страницы.

Props:

| Prop          | Type                   | Default | Описание         |
| ------------- | ---------------------- | ------- | ---------------- |
| `title`       | `string`               | —       | Заголовок.       |
| `description` | `string`               | —       | Описание.        |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'`  | Размер.          |
| `footer`      | `ReactNode`            | —       | Кнопки действий. |
| `onClose`     | `() => void`           | —       | Закрытие.        |
| `children`    | `ReactNode`            | —       | Контент.         |

Пример:

```jsx
<Overlay open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal
    title="Удалить проект?"
    description="Это действие нельзя отменить."
    onClose={() => setIsOpen(false)}
    footer={(
      <Inline gap="sm" justify="end">
        <Button variant="secondary" onClick={() => setIsOpen(false)}>Отмена</Button>
        <Button variant="danger">Удалить</Button>
      </Inline>
    )}
  />
</Overlay>
```

### Drawer

Назначение: боковая панель.

Props:

| Prop       | Type                | Default   | Описание           |
| ---------- | ------------------- | --------- | ------------------ |
| `open`     | `boolean`           | —         | Открыта ли панель. |
| `position` | `'left' \| 'right'` | `'right'` | Сторона.           |
| `title`    | `string`            | —         | Заголовок.         |
| `onClose`  | `() => void`        | —         | Закрытие.          |
| `children` | `ReactNode`         | —         | Контент.           |

### Tooltip

Назначение: краткая подсказка при наведении/фокусе.

Props:

| Prop        | Type                                     | Default | Описание         |
| ----------- | ---------------------------------------- | ------- | ---------------- |
| `content`   | `ReactNode`                              | —       | Текст подсказки. |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Позиция.         |
| `children`  | `ReactNode`                              | —       | Целевой элемент. |

### Toast

Назначение: короткое уведомление.

Props:

| Prop       | Type                                           | Default  | Описание         |
| ---------- | ---------------------------------------------- | -------- | ---------------- |
| `tone`     | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Тип уведомления. |
| `title`    | `string`                                       | —        | Заголовок.       |
| `children` | `ReactNode`                                    | —        | Текст.           |

### Spinner

Назначение: индикатор загрузки.

Props:

| Prop    | Type                   | Default      | Описание           |
| ------- | ---------------------- | ------------ | ------------------ |
| `size`  | `'sm' \| 'md' \| 'lg'` | `'md'`       | Размер.            |
| `label` | `string`               | `'Загрузка'` | Доступная подпись. |

## Navigation

### Tabs

Назначение: переключение между секциями.

Props:

| Prop           | Type                                                     | Default | Описание                       |
| -------------- | -------------------------------------------------------- | ------- | ------------------------------ |
| `items`        | `{ value: string; label: string; content: ReactNode }[]` | `[]`    | Вкладки.                       |
| `value`        | `string`                                                 | —       | Активная вкладка.              |
| `defaultValue` | `string`                                                 | —       | Активная вкладка по умолчанию. |
| `onChange`     | `(value: string) => void`                                | —       | Обработчик изменения.          |

### Breadcrumbs

Назначение: навигация по иерархии страниц.

Props:

| Prop        | Type                                                                                      | Default | Описание                                     |
| ----------- | ----------------------------------------------------------------------------------------- | ------- | -------------------------------------------- |
| `items`     | `{ label: string; href?: string; onClick?: () => void }[]`                               | —       | Массив элементов хлебных крошек.             |
| `separator` | `string`                                                                                  | `'/'`   | Сепаратор между элементами.                  |
| `maxVisible`| `number`                                                                                  | —       | Максимальное количество видимых элементов.  |
| `onSelect`  | `(item: { label: string; href?: string }) => void`                                       | —       | Обработчик клика по элементу.                |

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

## Типовые композиции

### Форма внутри карточки

```jsx
<Card title="Вход" padding="lg">
  <Form>
    <Stack gap="md">
      <Input id="email" name="email" label="Email" type="email" required />
      <Input id="password" name="password" label="Пароль" type="password" required />
      <Button type="submit" fullWidth>Войти</Button>
    </Stack>
  </Form>
</Card>
```

### Карточки в сетке

```jsx
<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
  {products.map((product) => (
    <Card key={product.id} padding="lg">
      <Stack gap="sm">
        <Heading level={3}>{product.name}</Heading>
        <Text tone="muted">{product.description}</Text>
        <Text weight="bold">{product.price}</Text>
      </Stack>
    </Card>
  ))}
</Grid>
```

### Модальное подтверждение

```jsx
<Overlay open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal
    title="Подтвердите действие"
    footer={(
      <Inline gap="sm" justify="end">
        <Button variant="secondary" onClick={() => setIsOpen(false)}>Отмена</Button>
        <Button variant="danger">Подтвердить</Button>
      </Inline>
    )}
    onClose={() => setIsOpen(false)}
  >
    <Text>Это действие нельзя отменить.</Text>
  </Modal>
</Overlay>
```

## Что нельзя делать

Плохо:

```jsx
<div className="card">
  <span>Цена</span>
  <button>Купить</button>
</div>
```

Хорошо:

```jsx
<Card padding="lg">
  <Stack gap="sm">
    <Text tone="muted">Цена</Text>
    <Button>Купить</Button>
  </Stack>
</Card>
```
