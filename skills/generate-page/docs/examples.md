# Plasma Web Examples

## Как читать примеры

Каждый пример показывает эталонный формат ответа агента. Если пользователь просит только код, агент должен вернуть только JSX/TSX-код.

## Обязательный шаблон (применяется во всех примерах)

```jsx
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
```

**Правила для Card:**
- Всегда задавайте фон: `<Card style={{ background: 'var(--surface-solid-card)' }}>`
- Всегда оборачивайте контент в `<CardBody>` для внутренних отступов

---

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
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <div style={{ marginBottom: '12px' }}>
              <Badge view="positive" size="m">В наличии</Badge>
            </div>
            <H4 style={{ marginBottom: '8px' }}>Plasma Hoodie</H4>
            <TextM color="var(--text-secondary)" style={{ marginBottom: '16px' }}>Мягкое худи для команды разработки</TextM>
            <TextS weight="bold" style={{ marginBottom: '16px', fontSize: '24px' }}>4 990 ₽</TextS>
            <Button view="primary" size="m" text="Купить" />
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

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

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
  color: var(--text-primary, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardBody = styled.div`
  padding: 24px;
  min-width: 360px;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
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
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

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

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
  color: var(--text-primary, #ffffff);
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Button view="critical" size="m" text="Удалить" />
      </Page>
    </>
  )
}
```

---

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

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
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
        <Button view="critical" size="m" text="Удалить проект" onClick={() => setIsOpen(true)} />

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Удалить проект?"
          footer={(
            <ButtonGroup>
              <Button view="secondary" size="m" text="Отмена" onClick={() => setIsOpen(false)} />
              <Button view="critical" size="m" text="Удалить" onClick={() => setIsOpen(false)} />
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

---

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`

export default function App() {
  const stats = [
    { id: 'orders', label: 'Заказы', value: '1 284' },
    { id: 'revenue', label: 'Выручка', value: '2 450 000 ₽' },
    { id: 'returns', label: 'Возвраты', value: '18' },
  ]

  const clients = [
    { id: '1', name: 'Анна Смирнова', plan: 'Pro', status: <Badge view="positive">Активен</Badge> },
    { id: '2', name: 'Иван Петров', plan: 'Team', status: <Badge view="warning">Ожидает оплаты</Badge> },
    { id: '3', name: 'Мария Ким', plan: 'Enterprise', status: <Badge view="positive">Активен</Badge> },
  ]

  return (
    <>
      <Theme />
      <Page>
        <H4>Dashboard</H4>

        <Grid style={{ marginTop: '24px' }}>
          {stats.map((stat) => (
            <Card key={stat.id} style={{ background: 'var(--surface-solid-card)' }}>
              <CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <TextM color="var(--text-secondary)">{stat.label}</TextM>
                  <Badge view={stat.id === "returns" ? "warning" : stat.id === "revenue" ? "positive" : "accent"} size="s">{stat.label}</Badge>
                </div>
                <TextS weight="bold">{stat.value}</TextS>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <H4>Последние клиенты</H4>
              <Button view="secondary" size="m" text="Экспорт" />
            </div>

            {clients.map((client) => (
              <div key={client.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <TextM>{client.name}</TextM>
                  <TextS color="var(--text-secondary)">{client.plan}</TextS>
                </div>
                {client.status}
              </div>
            ))}
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

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

const FilterForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4 style={{ marginBottom: '24px' }}>Фильтры</H4>

            <FilterForm>
              <TextField id="search" name="search" label="Поиск" type="search" placeholder="Название товара" />
              <TextField id="category" name="category" label="Категория" placeholder="Все категории" />
              <TextField id="minPrice" name="minPrice" label="Цена от" type="number" placeholder="0" />
              <TextField id="maxPrice" name="maxPrice" label="Цена до" type="number" placeholder="10000" />
            </FilterForm>

            <div style={{ marginTop: '16px' }}>
              <Checkbox id="inStock" name="inStock" label="Только товары в наличии" />
            </div>

            <Button view="primary" size="m" text="Применить фильтры" stretching="filled" style={{ marginTop: '16px' }} />
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

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

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
  color: var(--text-primary, #ffffff);
`

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <EmptyStateContainer>
          <PlasmaEmptyState
            title={<H4>Проектов пока нет</H4>}
            description={<TextM>Создайте первый проект, чтобы начать работу с интерфейсами.</TextM>}
            action={<Button view="primary" size="m" text="Создать проект" />}
          />
        </EmptyStateContainer>
      </Page>
    </>
  )
}
```

---

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
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <H4>Профиль</H4>
              <Badge view="positive">Активен</Badge>
            </div>
            <Button view="primary" size="m" text="Редактировать" style={{ marginTop: '16px' }} />
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

## Пример 9: Страница профиля пользователя (запись в файл)

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
        <H4>Профиль пользователя</H4>

        <Card style={{ marginTop: '24px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
              <Avatar url="/avatar.jpg" name="Иван Иванов" size="l" />
              <div style={{ flex: 1 }}>
                <H4>Иван Иванов</H4>
                <TextM color="var(--text-secondary)">ivan@example.com</TextM>
                <div style={{ marginTop: '12px' }}>
                  <Badge view="positive">Активен</Badge>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                  <Button view="primary" size="m" text="Редактировать профиль" />
                  <Button view="secondary" size="m" text="Изменить аватар" />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4>Настройки безопасности</H4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <div>
                <TextM weight={500}>Двухфакторная аутентификация</TextM>
                <TextM color="var(--text-secondary)">Добавьте дополнительный уровень защиты</TextM>
              </div>
              <Badge view="positive">Включено</Badge>
            </div>
            <Button view="secondary" size="m" text="Управление" style={{ marginTop: '16px', width: '100%' }} />
          </CardBody>
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

---

## Пример 10: Reusable layout (запись в файл)

### Запрос

```text
Создай layout для страницы администратора и сохрани в layouts/admin-layout.jsx
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { H4 } from '@salutejs/plasma-web'

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #080808;
  color: var(--text-primary, #ffffff);
`

const Sidebar = styled.aside`
  width: 240px;
  background: #121212;
  padding: 16px;
  border-right: 1px solid var(--border-subtle, #333);
`

const Main = styled.main`
  flex: 1;
`

const Header = styled.header`
  padding: 16px 32px;
  background: #0f0f0f;
  border-bottom: 1px solid var(--border-subtle, #333);
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

---

## Пример 11: Полный цикл работы — от запроса до файла

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

**Ключевые моменты:**
- `` createGlobalStyle`${plasma_web__dark[0]}` `` — правильный синтаксис подключения темы
- `background: #080808` для Page — не через CSS-переменную
- Card всегда со `style={{ background: 'var(--surface-solid-card)' }}`
- Контент Card всегда в `CardBody` с `padding: 24px`
- У Card нет props `padding`, `radius`, `shadow`
- `Avatar` использует `url`, не `src`
- `Button` использует `text`/`view`/`size`/`stretching`, не `fullWidth`

---

## Пример 12: Таблица пользователей

### Запрос

```text
Сделай таблицу пользователей с пагинацией, фильтрами и экшенами (редактировать/удалить)
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, Card, H4, Table } from '@salutejs/plasma-web'

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

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

export default function App() {
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
          <Button view="secondary" size="s" text="Редактировать" />
          <Button view="critical" size="s" text="Удалить" />
        </ActionButtons>
      ),
    },
  ]

  const data = [
    { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор', status: <Badge view="positive">Активен</Badge> },
    { id: '2', name: 'Петр Петров', email: 'petr@example.com', role: 'Менеджер', status: <Badge view="positive">Активен</Badge> },
    { id: '3', name: 'Мария Сидорова', email: 'maria@example.com', role: 'Пользователь', status: <Badge view="warning">Неактивен</Badge> },
  ]

  return (
    <>
      <Theme />
      <Page>
        <H4>Пользователи</H4>

        <Card style={{ marginTop: '24px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <Table columns={columns} data={data} rowKey="id" />
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

---

## Пример 13: Страница контактов с формой

### Запрос

```text
Сделай страницу контактов с формой добавления: имя, email, телефон, чекбокс согласия. Добавь валидацию и кнопку отправки.
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, Checkbox, H4, TextField, TextM } from '@salutejs/plasma-web'

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H4>Контакты</H4>

        <Card style={{ marginTop: '24px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4 style={{ marginBottom: '24px' }}>Добавить контакт</H4>
            <FormContainer>
              <TextField id="name" name="name" label="Имя" type="text" placeholder="Иван Иванов" required />
              <TextField id="email" name="email" label="Email" type="email" placeholder="ivan@example.com" required />
              <TextField id="phone" name="phone" label="Телефон" type="tel" placeholder="+7 (999) 000-00-00" />
              <Checkbox id="consent" name="consent" label="Согласие на обработку персональных данных" required />
              <Button type="submit" view="primary" size="m" text="Добавить контакт" stretching="filled" />
            </FormContainer>
          </CardBody>
        </Card>

        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4 style={{ marginBottom: '16px' }}>Список контактов</H4>
            <TextM color="var(--text-secondary)">Контактов пока нет</TextM>
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

**Для интерактивной валидации используй useState:**

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

---

## Пример 14: Карточка сотрудника / детальная страница

### Запрос

```text
Создай карточку сотрудника с аватаром, контактами и доступами
```

### Ответ

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Avatar, Badge, Button, Card, Divider, H3, H4, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #080808;
  color: var(--text-primary, #ffffff);
  max-width: 720px;
  margin: 0 auto;
`

const CardBody = styled.div`
  padding: 24px;
`

const HeroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const HeroInfo = styled.div`
  flex: 1;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
`

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

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H3 style={{ marginBottom: '24px' }}>Карточка сотрудника</H3>

        {/* Hero-блок: аватар + основная информация */}
        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <HeroRow>
              <Avatar url="https://cdn-icons-png.flaticon.com/512/4140/4140045.png" name="Алексей Петров" size="xl" />
              <HeroInfo>
                <H4>Алексей Петров</H4>
                <MetaRow>
                  <Badge view="positive" size="s">Активен</Badge>
                  <TextS color="var(--text-secondary)">ID: EMP-2024-001</TextS>
                </MetaRow>
                <TextM color="var(--text-secondary)" style={{ marginTop: '6px' }}>alexey.petrov@bank.ru</TextM>
                <TextS color="var(--text-secondary)">Кредитный эксперт</TextS>
              </HeroInfo>
            </HeroRow>
          </CardBody>
        </Card>

        {/* Детальные поля: двухколоночная сетка */}
        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4>Подразделение</H4>
            <FieldGrid>
              <div>
                <FieldLabel>Отдел</FieldLabel>
                <FieldValue>Кредитный отдел</FieldValue>
              </div>
              <div>
                <FieldLabel>Подразделение</FieldLabel>
                <FieldValue>Отделение №456</FieldValue>
              </div>
              <div>
                <FieldLabel>Дата приёма</FieldLabel>
                <FieldValue>15.03.2024</FieldValue>
              </div>
              <div>
                <FieldLabel>Руководитель</FieldLabel>
                <FieldValue>Мария Смирнова</FieldValue>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <FieldLabel>Местоположение</FieldLabel>
                <FieldValue>г. Москва, ул. Пушкина, д. 10</FieldValue>
              </div>
            </FieldGrid>
          </CardBody>
        </Card>

        {/* Доступы + кнопки */}
        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4>Доступ и права</H4>
            <FieldLabel style={{ marginTop: '16px' }}>Системы доступа</FieldLabel>
            <TagRow>
              <Badge view="accent" size="m">Кредитная система</Badge>
              <Badge view="accent" size="m">База клиентов</Badge>
              <Badge view="accent" size="m">Финансовый отчёт</Badge>
            </TagRow>
            <Divider style={{ margin: '20px 0' }} />
            <Actions>
              <Button view="primary" size="m" text="Редактировать" />
              <Button view="secondary" size="m" text="Сменить статус" />
              <Button view="secondary" size="m" text="Выдать доступ" />
            </Actions>
          </CardBody>
        </Card>
      </Page>
    </>
  )
}
```

## Example 15: Маркетплейс — каталог товаров с сайдбаром

Запрос: «Сделай маркетплейс с каталогом товаров, сайдбаром с категориями и сеткой карточек»

```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Badge, Button, H3, H5, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle`${plasma_web__dark[0]}`

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #080808;
  color: var(--text-primary, #ffffff);
`

const Sidebar = styled.aside`
  width: 220px;
  flex-shrink: 0;
  background: #121212;
  border-right: 1px solid rgba(255,255,255,0.08);
  padding: 24px 16px;
`

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 32px;
  padding: 0 8px;
`

const NavSection = styled.div`
  margin-bottom: 24px;
`

const NavLabel = styled(TextS)`
  color: var(--text-secondary, #888);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 8px;
  margin-bottom: 8px;
  display: block;
`

const NavItem = styled.div`
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-primary, #ffffff);
  font-size: 14px;
  margin-bottom: 2px;
  background: ${({ active }) => active ? 'rgba(255,255,255,0.1)' : 'transparent'};
  font-weight: ${({ active }) => active ? '600' : '400'};

  &:hover {
    background: rgba(255,255,255,0.06);
  }
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Header = styled.header`
  padding: 16px 32px;
  background: #121212;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 32px;
  flex: 1;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
`

const ProductCard = styled.div`
  background: var(--surface-solid-card, #1c1c1c);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const ProductImage = styled.div`
  height: 160px;
  background: ${({ bg }) => bg || '#2a2a2a'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`

const ProductBody = styled.div`
  padding: 16px;
`

const ProductName = styled(TextM)`
  font-weight: 600;
  color: #ffffff;
  display: block;
  margin-bottom: 6px;
`

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
`

const OldPrice = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-secondary, #888);
  text-decoration: line-through;
  margin-left: 8px;
`

const products = [
  { id: 1, name: 'iPhone 15 Pro', price: '129 990 ₽', old: '149 990 ₽', badge: 'Хит', badgeView: 'positive', emoji: '📱', bg: '#1a2a3a' },
  { id: 2, name: 'MacBook Air M3', price: '149 990 ₽', old: null, badge: 'Новинка', badgeView: 'accent', emoji: '💻', bg: '#2a1a3a' },
  { id: 3, name: 'AirPods Pro 2', price: '24 990 ₽', old: '29 990 ₽', badge: '-17%', badgeView: 'warning', emoji: '🎧', bg: '#1a3a2a' },
  { id: 4, name: 'iPad Air 5', price: '74 990 ₽', old: null, badge: null, badgeView: null, emoji: '📲', bg: '#3a2a1a' },
  { id: 5, name: 'Apple Watch S9', price: '44 990 ₽', old: '49 990 ₽', badge: '-10%', badgeView: 'warning', emoji: '⌚', bg: '#1a1a3a' },
  { id: 6, name: 'Magic Keyboard', price: '12 990 ₽', old: null, badge: 'В наличии', badgeView: 'positive', emoji: '⌨️', bg: '#3a1a1a' },
]

export default function App() {
  return (
    <>
      <Theme />
      <Layout>
        <Sidebar>
          <Logo>Marketplace</Logo>
          <NavSection>
            <NavLabel>Каталог</NavLabel>
            <NavItem active>Все товары</NavItem>
            <NavItem>Смартфоны</NavItem>
            <NavItem>Ноутбуки</NavItem>
            <NavItem>Аксессуары</NavItem>
            <NavItem>Умные часы</NavItem>
          </NavSection>
          <NavSection>
            <NavLabel>Фильтры</NavLabel>
            <NavItem>До 30 000 ₽</NavItem>
            <NavItem>Новинки</NavItem>
            <NavItem>Со скидкой</NavItem>
          </NavSection>
        </Sidebar>

        <Main>
          <Header>
            <H5 style={{ color: '#ffffff', margin: 0 }}>Каталог товаров</H5>
            <TextM style={{ color: 'var(--text-secondary, #888)' }}>Добро пожаловать</TextM>
          </Header>

          <Content>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <H3 style={{ color: '#ffffff', margin: 0 }}>Все товары</H3>
                <TextS style={{ color: 'var(--text-secondary, #888)', marginTop: '4px' }}>
                  {products.length} позиций
                </TextS>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button view="secondary" size="s" text="Сортировка" />
                <Button view="primary" size="s" text="+ Добавить" />
              </div>
            </div>

            <Grid>
              {products.map(p => (
                <ProductCard key={p.id}>
                  <ProductImage bg={p.bg}>{p.emoji}</ProductImage>
                  <ProductBody>
                    {p.badge && (
                      <Badge view={p.badgeView} size="s" style={{ marginBottom: '8px' }}>
                        {p.badge}
                      </Badge>
                    )}
                    <ProductName>{p.name}</ProductName>
                    <ProductPrice>
                      {p.price}
                      {p.old && <OldPrice>{p.old}</OldPrice>}
                    </ProductPrice>
                    <Button view="primary" size="s" stretching="filled" text="В корзину" />
                  </ProductBody>
                </ProductCard>
              ))}
            </Grid>
          </Content>
        </Main>
      </Layout>
    </>
  )
}
```
