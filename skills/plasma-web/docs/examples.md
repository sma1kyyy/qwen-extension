# Plasma Web Examples

## Как читать примеры

Каждый пример показывает эталонный формат ответа агента. Если пользователь просит только код, агент должен вернуть только JSX/TSX-код. Если пользователь просит объяснение, можно добавить краткое описание и список компонентов.

## Пример 1: Карточка товара

### Запрос

```text
Сделай карточку товара с названием, ценой и кнопкой "Купить" на Plasma Web
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, Card, H4, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const ProductCard = () => {
  return (
    <>
      <Theme />
      <Card >
        <div style={{ marginBottom: '12px' }}>
          <Badge tone="success" size="m">В наличии</Badge>
        </div>
        <H4 style={{ marginBottom: '8px' }}>Plasma Hoodie</H4>
        <TextM tone="neutral" style={{ marginBottom: '16px' }}>Мягкое худи для команды разработки</TextM>
        <TextS weight="bold" style={{ marginBottom: '16px', fontSize: '24px' }}>4 990 ₽</TextS>
        <Button view="primary" size="m" text="Купить" />
      </Card>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Card >
        <div style={{ marginBottom: '12px' }}>
          <Badge tone="success" size="m">В наличии</Badge>
        </div>
        <H4 style={{ marginBottom: '8px' }}>Plasma Hoodie</H4>
        <TextM tone="neutral" style={{ marginBottom: '16px' }}>Мягкое худи для команды разработки</TextM>
        <TextS weight="bold" style={{ marginBottom: '16px', fontSize: '24px' }}>4 990 ₽</TextS>
        <Button view="primary" size="m" text="Купить" />
      </Card>
    </>
  )
}
```

## Пример 2: Форма логина

### Запрос

```text
Сделай форму логина на Plasma Web
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, H3, TextField } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const LoginForm = () => {
  return (
    <>
      <Theme />
      <Card >
        <H3 style={{ marginBottom: '24px' }}>Вход в аккаунт</H3>
        <FormContainer>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <TextField
            id="password"
            name="password"
            label="Пароль"
            type="password"
            placeholder="Введите пароль"
            required
          />
          <Button type="submit" view="primary" size="m" text="Войти" stretching="filled" />
        </FormContainer>
      </Card>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Card >
          <H3 style={{ marginBottom: '24px' }}>Вход в аккаунт</H3>
          <FormContainer>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <TextField
              id="password"
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
              required
            />
            <Button type="submit" view="primary" size="m" text="Войти" stretching="filled" />
          </FormContainer>
        </Card>
      </Page>
    </>
  )
}
```

## Пример 3: Красная кнопка удаления

### Запрос

```text
Добавь красную кнопку удаления
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button } from '@salutejs/plasma-web'

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
        <Button view="danger" size="m" text="Удалить" />
      </Page>
    </>
  )
}
```

## Пример 4: Модальное окно подтверждения

### Запрос

```text
Покажи модальное окно с подтверждением удаления проекта
```

### Ответ

```jsx
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Modal, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Theme />
      <Page>
        <Button view="danger" size="m" text="Удалить проект" onClick={() => setIsOpen(true)} />

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Удалить проект?"
          footer={(
            <ButtonGroup>
              <Button view="secondary" size="m" text="Отмена" onClick={() => setIsOpen(false)} />
              <Button view="danger" size="m" text="Удалить" onClick={() => setIsOpen(false)} />
            </ButtonGroup>
          )}
        >
          <TextM>Проект и связанные с ним данные будут удалены без возможности восстановления.</TextM>
        </Modal>
      </Page>
    </>
  )
}
```

## Пример 5: Страница dashboard

### Запрос

```text
Сгенерируй dashboard со статистикой заказов, выручкой и последними клиентами
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, Card, H4, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`

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
    <>
      <Theme />
      <Page>
        <H4>Dashboard</H4>

        <Grid>
          {stats.map((stat) => (
            <Card key={stat.id} >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <TextM tone="neutral">{stat.label}</TextM>
                <Badge tone={stat.tone} size="s">{stat.id}</Badge>
              </div>
              <TextS weight="bold">{stat.value}</TextS>
            </Card>
          ))}
        </Grid>

        <Card >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <H4>Последние клиенты</H4>
            <Button view="outline" size="m" text="Экспорт" />
          </div>

          {clients.map((client) => (
            <div key={client.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div>
                <TextM>{client.name}</TextM>
                <TextS tone="neutral">{client.plan}</TextS>
              </div>
              {client.status}
            </div>
          ))}
        </Card>
      </Page>
    </>
  )
}

export default function App() {
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
    <>
      <Theme />
      <Page>
        <H4>Dashboard</H4>

        <Grid>
          {stats.map((stat) => (
            <Card key={stat.id} >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <TextM tone="neutral">{stat.label}</TextM>
                <Badge tone={stat.tone} size="s">{stat.id}</Badge>
              </div>
              <TextS weight="bold">{stat.value}</TextS>
            </Card>
          ))}
        </Grid>

        <Card >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <H4>Последние клиенты</H4>
            <Button view="outline" size="m" text="Экспорт" />
          </div>

          {clients.map((client) => (
            <div key={client.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div>
                <TextM>{client.name}</TextM>
                <TextS tone="neutral">{client.plan}</TextS>
              </div>
              {client.status}
            </div>
          ))}
        </Card>
      </Page>
    </>
  )
}
```

## Пример 6: Форма фильтра каталога

### Запрос

```text
Сделай блок фильтров для каталога: поиск, категория, цена и чекбокс "только в наличии"
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, Checkbox, H4, TextField } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const FilterForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`

const CatalogFilters = () => {
  return (
    <>
      <Theme />
      <Card >
        <H4 style={{ marginBottom: '24px' }}>Фильтры</H4>

        <FilterForm>
          <TextField
            id="search"
            name="search"
            label="Поиск"
            type="search"
            placeholder="Название товара"
          />
          <TextField
            id="category"
            name="category"
            label="Категория"
            placeholder="Все категории"
          />
          <TextField
            id="minPrice"
            name="minPrice"
            label="Цена от"
            type="number"
            placeholder="0"
          />
          <TextField
            id="maxPrice"
            name="maxPrice"
            label="Цена до"
            type="number"
            placeholder="10000"
          />
        </FilterForm>

        <div style={{ marginTop: '16px' }}>
          <Checkbox id="inStock" name="inStock" label="Только товары в наличии" />
        </div>

        <Button view="primary" size="m" text="Применить фильтры" stretching="filled" style={{ marginTop: '16px' }} />
      </Card>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Card >
          <H4 style={{ marginBottom: '24px' }}>Фильтры</H4>

          <FilterForm>
            <TextField
              id="search"
              name="search"
              label="Поиск"
              type="search"
              placeholder="Название товара"
            />
            <TextField
              id="category"
              name="category"
              label="Категория"
              placeholder="Все категории"
            />
            <TextField
              id="minPrice"
              name="minPrice"
              label="Цена от"
              type="number"
              placeholder="0"
            />
            <TextField
              id="maxPrice"
              name="maxPrice"
              label="Цена до"
              type="number"
              placeholder="10000"
            />
          </FilterForm>

          <div style={{ marginTop: '16px' }}>
            <Checkbox id="inStock" name="inStock" label="Только товары в наличии" />
          </div>

          <Button view="primary" size="m" text="Применить фильтры" stretching="filled" style={{ marginTop: '16px' }} />
        </Card>
      </Page>
    </>
  )
}
```

## Пример 7: Empty state

### Запрос

```text
Покажи пустое состояние для списка проектов
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, EmptyState as PlasmaEmptyState, H4, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px;
`

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
        <EmptyStateContainer>
          <PlasmaEmptyState title={<H4>Проектов пока нет</H4>} description={<TextM>Создайте первый проект, чтобы начать работу с интерфейсами.</TextM>} action={<Button view="primary" size="m" text="Создать проект" />} />
        </EmptyStateContainer>
      </Page>
    </>
  )
}
```

## Пример 8: Переписывание плохой HTML-разметки

### Запрос

```text
Перепиши на Plasma Web:
<div><h2>Профиль</h2><span>Активен</span><button>Редактировать</button></div>
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, Card, H4 } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const ProfileSummary = () => {
  return (
    <>
      <Theme />
      <Card >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <H4>Профиль</H4>
          <Badge tone="success">Активен</Badge>
        </div>
        <Button view="primary" size="m" text="Редактировать" style={{ marginTop: '16px' }} />
      </Card>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Card >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <H4>Профиль</H4>
            <Badge tone="success">Активен</Badge>
          </div>
          <Button view="primary" size="m" text="Редактировать" style={{ marginTop: '16px' }} />
        </Card>
      </Page>
    </>
  )
}
```

## Пример 9: Интеграция с generate-page (запись в файл)

### Запрос

```text
Создай страницу профиля пользователя и сохрани в pages/profile.jsx
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Avatar, Badge, Button, Card, H4, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const ProfilePage = () => {
  return (
    <>
      <Theme />
      <Page>
        <H4>Профиль пользователя</H4>

        <Card  style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />

            <div style={{ flex: 1 }}>
              <H4>Иван Иванов</H4>
              <TextM tone="neutral">ivan@example.com</TextM>

              <div style={{ marginTop: '12px' }}>
                <Badge tone="success">Активен</Badge>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                <Button view="primary" size="m" text="Редактировать профиль" />
                <Button view="outline" size="m" text="Изменить аватар" />
              </div>
            </div>
          </div>
        </Card>

        <Card  style={{ marginTop: '16px' }}>
          <H4>Настройки безопасности</H4>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div>
              <TextM weight={500}>Двухфакторная аутентификация</TextM>
              <TextM tone="neutral">Добавьте дополнительный уровень защиты</TextM>
            </div>
            <Badge tone="success">Включено</Badge>
          </div>

          <Button view="secondary" size="m" text="Управление" style={{ marginTop: '16px' }} stretching="filled" />
        </Card>
      </Page>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H4>Профиль пользователя</H4>

        <Card  style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />

            <div style={{ flex: 1 }}>
              <H4>Иван Иванов</H4>
              <TextM tone="neutral">ivan@example.com</TextM>

              <div style={{ marginTop: '12px' }}>
                <Badge tone="success">Активен</Badge>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                <Button view="primary" size="m" text="Редактировать профиль" />
                <Button view="outline" size="m" text="Изменить аватар" />
              </div>
            </div>
          </div>
        </Card>

        <Card  style={{ marginTop: '16px' }}>
          <H4>Настройки безопасности</H4>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div>
              <TextM weight={500}>Двухфакторная аутентификация</TextM>
              <TextM tone="neutral">Добавьте дополнительный уровень защиты</TextM>
            </div>
            <Badge tone="success">Включено</Badge>
          </div>

          <Button view="secondary" size="m" text="Управление" style={{ marginTop: '16px' }} stretching="filled" />
        </Card>
      </Page>
    </>
  )
}
```

**Инструкция для записи в файл:**
1. Создай файл `pages/profile.jsx` в проекте
2. Скопируй код выше в файл
3. Убедись, что папка `pages/` существует

## Пример 10: Интеграция с create-layout (создание reusable layout)

### Запрос

```text
Создай layout для страницы администратора и сохрани в layouts/admin-layout.jsx
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, H4 } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`

const Sidebar = styled.div`
  width: 240px;
  background: var(--surface-solid-default, #080808);
  padding: 16px;
`

const Main = styled.main`
  flex: 1;
`

const Header = styled.header`
  padding: 16px 32px;
  background: var(--surface-solid-default, #080808);
`

const Content = styled.div`
  padding: 32px;
`

export default function AdminLayout({ children }) {
  return (
    <>
      <Theme />
      <Layout>
        <Sidebar>
          <H4 style={{ marginBottom: '24px' }}>Меню</H4>
          {/* Навигация */}
        </Sidebar>
        <Main>
          <Header>
            <H4>Админ панель</H4>
          </Header>
          <Content>{children}</Content>
        </Main>
      </Layout>
    </>
  )
}
```

**Инструкция для записи в файл:**
1. Создай файл `layouts/admin-layout.jsx` в проекте
2. Скопируй код выше в файл
3. Используй этот layout при генерации страниц через `generate-page`

## Пример 11: Полный цикл работы - от запроса до файла

### Сценарий: Пользователь просит создать страницу профиля

**Запрос пользователя:**
```text
Создай страницу профиля пользователя на Plasma Web и сохрани в pages/profile.jsx
```

**Действия агента:**

1. **Генерация кода (см. Пример 9 выше)**

2. **Подтверждение сохранения:**
```
Я сгенерировал код страницы профиля. Сохранить его в pages/profile.jsx?
```

3. **После подтверждения:**
- Создать файл `pages/profile.jsx`
- Вставить сгенерированный код
- Сообщить: "Файл pages/profile.jsx успешно создан"

**Ключевые моменты для Plasma Web:**
- Всегда генерируй полный код перед сохранением
- Запрашивай подтверждение перед записью в файл
- Указывай точный путь к файлу при подтверждении
- Используй `createGlobalStyle` для темы Plasma Web
- Экспортируй как `export default function App() { ... }`
- Импортируй компоненты из `@salutejs/plasma-web`
- Импортируй тему из `@salutejs/plasma-themes`
- Используй `view` (primary/secondary/outline/ghost/danger) для кнопок
- Используй `size` (s/m/l) для компонентов
- У Card нет props `padding`, `radius`, `shadow` — стилизуй через styled-обёртку

## Пример 12: Сложная таблица с пагинацией, фильтрами и экшенами

### Запрос

```text
Сделай таблицу пользователей с пагинацией, фильтрами и экшенами (редактировать/удалить)
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, Card, H4, Pagination, Table, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

const UsersTable = () => {
  const columns = [
    { title: 'Имя', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Роль', key: 'role' },
    { title: 'Статус', key: 'status' },
    { title: 'Действия', key: 'actions' },
  ]

  const data = [
    { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор', status: <Badge tone="success">Активен</Badge> },
    { id: '2', name: 'Петр Петров', email: 'petr@example.com', role: 'Менеджер', status: <Badge tone="success">Активен</Badge> },
    { id: '3', name: 'Мария Сидорова', email: 'maria@example.com', role: 'Пользователь', status: <Badge tone="warning">Неактивен</Badge> },
    { id: '4', name: 'Алексей Козлов', email: 'alexey@example.com', role: 'Пользователь', status: <Badge tone="success">Активен</Badge> },
    { id: '5', name: 'Елена Новикова', email: 'elena@example.com', role: 'Менеджер', status: <Badge tone="success">Активен</Badge> },
  ]

  return (
    <>
      <Theme />
      <Page>
        <H4>Пользователи</H4>

        <Card  style={{ marginTop: '24px' }}>
          <Table
            columns={columns}
            data={data}
            rowKey="id"
            pagination={{
              total: data.length,
              pageSize: 5,
              current: 1,
            }}
          />
        </Card>
      </Page>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H4>Пользователи</H4>

        <Card  style={{ marginTop: '24px' }}>
          <Table
            columns={columns}
            data={data}
            rowKey="id"
            pagination={{
              total: data.length,
              pageSize: 5,
              current: 1,
            }}
          />
        </Card>
      </Page>
    </>
  )
}
```

**Ключевые моменты для таблицы с экшенами (если нужна кастомная колонка действий):**

```jsx
// Вместо простой таблицы используй кастомную колонку:
const columns = [
  { title: 'Имя', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Роль', key: 'role' },
  { title: 'Статус', key: 'status' },
  { 
    title: 'Действия', 
    key: 'actions',
    render: (record) => (
      <ActionButtons>
        <Button view="outline" size="s" text="Редактировать" />
        <Button view="danger" size="s" text="Удалить" />
      </ActionButtons>
    ),
  },
]
```

**Для фильтрации добавь Card с фильтрами перед таблицей (см. Пример 6 для формы фильтра).**

**Для пагинации используй prop `pagination` в Table с объектом { total, pageSize, current }.**

## Пример 13: Страница контактов с валидацией

### Запрос

```text
Сделай страницу контактов с формой добавления: имя, email, телефон, чекбокс согласия на обработку данных. Добавь валидацию и кнопку отправки.
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, Checkbox, H4, TextField, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ContactsPage = () => {
  return (
    <>
      <Theme />
      <Page>
        <H4>Контакты</H4>

        <Card  style={{ marginTop: '24px' }}>
          <H4 style={{ marginBottom: '24px' }}>Добавить контакт</H4>

          <FormContainer>
            <TextField
              id="name"
              name="name"
              label="Имя"
              type="text"
              placeholder="Иван Иванов"
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="ivan@example.com"
              required
            />
            <TextField
              id="phone"
              name="phone"
              label="Телефон"
              type="tel"
              placeholder="+7 (999) 000-00-00"
            />
            <Checkbox
              id="consent"
              name="consent"
              label="Согласие на обработку персональных данных"
              required
            />
            <Button type="submit" view="primary" size="m" text="Добавить контакт" stretching="filled" />
          </FormContainer>
        </Card>

        <Card  style={{ marginTop: '16px' }}>
          <H4 style={{ marginBottom: '16px' }}>Список контактов</H4>

          <TextM tone="neutral">Контактов пока нет</TextM>
        </Card>
      </Page>
    </>
  )
}

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H4>Контакты</H4>

        <Card  style={{ marginTop: '24px' }}>
          <H4 style={{ marginBottom: '24px' }}>Добавить контакт</H4>

          <FormContainer>
            <TextField
              id="name"
              name="name"
              label="Имя"
              type="text"
              placeholder="Иван Иванов"
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="ivan@example.com"
              required
            />
            <TextField
              id="phone"
              name="phone"
              label="Телефон"
              type="tel"
              placeholder="+7 (999) 000-00-00"
            />
            <Checkbox
              id="consent"
              name="consent"
              label="Согласие на обработку персональных данных"
              required
            />
            <Button type="submit" view="primary" size="m" text="Добавить контакт" stretching="filled" />
          </FormContainer>
        </Card>

        <Card  style={{ marginTop: '16px' }}>
          <H4 style={{ marginBottom: '16px' }}>Список контактов</H4>

          <TextM tone="neutral">Контакто�� пока нет</TextM>
        </Card>
      </Page>
    </>
  )
}
```

**Ключевые моменты для валидации:**

1. **Обязательные поля:** используй `required` в TextField и Checkbox
2. **Типы полей:** `type="email"` для email, `type="tel"` для телефона
3. **Лейблы:** всегда используй `label` для доступности
4. **Идентификаторы:** используй уникальные `id` и `name` для каждого поля
5. **Кнопка отправки:** `Button type="submit" view="primary"`

**Для интерактивной валидации (показ ошибок) используй useState:**

```jsx
import React, { useState } from 'react'

const [errors, setErrors] = useState({})

const validate = () => {
  const newErrors = {}
  if (!name) newErrors.name = 'Обязательное поле'
  if (!email || !email.includes('@')) newErrors.email = 'Некорректный email'
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}
```

**Для состояния успеха/ошибки после отправки используй Toast или Badge:**

```jsx
import { Toast } from '@salutejs/plasma-web'

const [toastOpen, setToastOpen] = useState(false)
const [toastMessage, setToastMessage] = useState('')
const [toastTone, setToastTone] = useState('success')

// После успешной отправки:
setToastMessage('Контакт успешно добавлен')
setToastTone('success')
setToastOpen(true)

// Для ошибки:
setToastMessage('Ошибка при добавлении контакта')
setToastTone('danger')
setToastOpen(true)
```
