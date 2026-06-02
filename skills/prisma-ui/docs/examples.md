# Prisma UI Examples

## Как читать примеры

Каждый пример показывает эталонный формат ответа агента. Если пользователь просит только код, агент должен вернуть только JSX/TSX-код. Если пользователь просит объяснение, можно добавить краткое описание и список компонентов.

## Пример 1: Карточка товара

### Запрос

```text
Сделай карточку товара с названием, ценой и кнопкой "Купить" на Prisma UI
```

### Ответ

```jsx
import { Badge, Button, Card, Heading, Stack, Text } from '@prisma-ui/react'

const ProductCard = () => {
  return (
    <Card padding="lg" radius="lg" shadow="md">
      <Stack gap="md">
        <Badge tone="success">В наличии</Badge>
        <Stack gap="xs">
          <Heading level={3}>Prisma Hoodie</Heading>
          <Text tone="muted">Мягкое худи для команды разработки</Text>
        </Stack>
        <Text size="xl" weight="bold">4 990 ₽</Text>
        <Button variant="primary" size="md">Купить</Button>
      </Stack>
    </Card>
  )
}

export default ProductCard
```

## Пример 2: Форма логина

### Запрос

```text
Сделай форму логина на Prisma UI
```

### Ответ

```jsx
import { Button, Card, Form, Heading, Input, Link, Stack, Text } from '@prisma-ui/react'

const LoginForm = () => {
  return (
    <Card padding="lg" radius="lg" shadow="md">
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading level={2}>Вход в аккаунт</Heading>
          <Text tone="muted">Введите email и пароль, чтобы продолжить</Text>
        </Stack>

        <Form>
          <Stack gap="md">
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <Input
              id="password"
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
              required
            />
            <Button type="submit" variant="primary" fullWidth>
              Войти
            </Button>
          </Stack>
        </Form>

        <Text size="sm" tone="muted">
          Нет аккаунта? <Link href="/signup">Зарегистрироваться</Link>
        </Text>
      </Stack>
    </Card>
  )
}

export default LoginForm
```

## Пример 3: Красная кнопка

### Запрос

```text
Добавь красную кнопку удаления
```

### Ответ

```jsx
import { Button } from '@prisma-ui/react'

const DeleteButton = () => {
  return (
    <Button variant="danger" size="md">
      Удалить
    </Button>
  )
}

export default DeleteButton
```

## Пример 4: Модальное окно подтверждения

### Запрос

```text
Покажи модальное окно с подтверждением удаления проекта
```

### Ответ

```jsx
import { useState } from 'react'
import { Button, Inline, Modal, Overlay, Stack, Text } from '@prisma-ui/react'

const ConfirmDeleteProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Stack gap="md" align="start">
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Удалить проект
      </Button>

      <Overlay open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal
          title="Удалить проект?"
          description="Это действие нельзя отменить."
          size="sm"
          onClose={() => setIsOpen(false)}
          footer={(
            <Inline gap="sm" justify="end">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Отмена
              </Button>
              <Button variant="danger">
                Удалить
              </Button>
            </Inline>
          )}
        >
          <Text>
            Проект и связанные с ним данные будут удалены без возможности восстановления.
          </Text>
        </Modal>
      </Overlay>
    </Stack>
  )
}

export default ConfirmDeleteProjectModal
```

## Пример 5: Страница dashboard

### Запрос

```text
Сгенерируй dashboard со статистикой заказов, выручкой и последними клиентами
```

### Ответ

```jsx
import { Badge, Button, Card, Grid, Heading, Inline, Page, Section, Stack, Table, Text } from '@prisma-ui/react'

const DashboardPage = () => {
  const stats = [
    { id: 'orders', label: 'Заказы', value: '1 284', tone: 'info' },
    { id: 'revenue', label: 'Выручка', value: '2 450 000 ₽', tone: 'success' },
    { id: 'returns', label: 'Возвраты', value: '18', tone: 'warning' },
  ]

  const clients = [
    { id: '1', name: 'Анна Смирнова', plan: 'Pro', status: <Badge tone="success">Активен</Badge> },
    { id: '2', name: 'Иван Петров', plan: 'Team', status: <Badge tone="warning">Ожидает оплаты</Badge> },
    { id: '3', name: 'Мария Ким', plan: 'Enterprise', status: <Badge tone="success">Активен</Badge> },
  ]

  return (
    <Page title="Dashboard" description="Ключевые показатели продаж" maxWidth="xl">
      <Stack gap="lg">
        <Grid columns={{ sm: 1, md: 3 }} gap="lg">
          {stats.map((stat) => (
            <Card key={stat.id} padding="lg" shadow="sm">
              <Stack gap="xs">
                <Inline justify="between">
                  <Text tone="muted">{stat.label}</Text>
                  <Badge tone={stat.tone}>{stat.id}</Badge>
                </Inline>
                <Text size="xl" weight="bold">{stat.value}</Text>
              </Stack>
            </Card>
          ))}
        </Grid>

        <Section title="Последние клиенты" description="Недавно добавленные клиенты и их статусы">
          <Card padding="lg">
            <Stack gap="md">
              <Inline justify="between">
                <Heading level={3}>Клиенты</Heading>
                <Button variant="outline">Экспорт</Button>
              </Inline>
              <Table
                columns={[
                  { key: 'name', title: 'Имя' },
                  { key: 'plan', title: 'Тариф' },
                  { key: 'status', title: 'Статус' },
                ]}
                data={clients}
                rowKey="id"
              />
            </Stack>
          </Card>
        </Section>
      </Stack>
    </Page>
  )
}

export default DashboardPage
```

## Пример 6: Форма фильтра каталога

### Запрос

```text
Сделай блок фильтров для каталога: поиск, категория, цена и чекбокс "только в наличии"
```

### Ответ

```jsx
import { Button, Card, Checkbox, Grid, Input, Select, Stack } from '@prisma-ui/react'

const CatalogFilters = () => {
  return (
    <Card title="Фильтры" padding="lg">
      <Stack gap="md">
        <Grid columns={{ sm: 1, md: 2 }} gap="md">
          <Input
            id="search"
            name="search"
            label="Поиск"
            type="search"
            placeholder="Название товара"
          />
          <Select
            id="category"
            name="category"
            label="Категория"
            placeholder="Все категории"
            options={[
              { label: 'Одежда', value: 'clothes' },
              { label: 'Аксессуары', value: 'accessories' },
              { label: 'Электроника', value: 'electronics' },
            ]}
          />
          <Input
            id="minPrice"
            name="minPrice"
            label="Цена от"
            type="number"
            placeholder="0"
          />
          <Input
            id="maxPrice"
            name="maxPrice"
            label="Цена до"
            type="number"
            placeholder="10000"
          />
        </Grid>

        <Checkbox
          id="inStock"
          name="inStock"
          label="Только товары в наличии"
        />

        <Button variant="primary">Применить фильтры</Button>
      </Stack>
    </Card>
  )
}

export default CatalogFilters
```

## Пример 7: Empty state

### Запрос

```text
Покажи пустое состояние для списка проектов
```

### Ответ

```jsx
import { Button, EmptyState } from '@prisma-ui/react'

const ProjectsEmptyState = () => {
  return (
    <EmptyState
      title="Проектов пока нет"
      description="Создайте первый проект, чтобы начать работу с интерфейсами."
      action={<Button variant="primary">Создать проект</Button>}
    />
  )
}

export default ProjectsEmptyState
```

## Пример 8: Переписывание плохой HTML-разметки

### Запрос

```text
Перепиши на Prisma UI:
<div><h2>Профиль</h2><span>Активен</span><button>Редактировать</button></div>
```

### Ответ

```jsx
import { Badge, Button, Card, Heading, Inline, Stack } from '@prisma-ui/react'

const ProfileSummary = () => {
  return (
    <Card padding="lg" shadow="sm">
      <Stack gap="md">
        <Inline justify="between" align="center">
          <Heading level={2}>Профиль</Heading>
          <Badge tone="success">Активен</Badge>
        </Inline>
        <Button variant="primary">Редактировать</Button>
      </Stack>
    </Card>
  )
}

export default ProfileSummary
```
