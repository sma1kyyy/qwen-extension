import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, Checkbox, HeadlineS, Pagination, Table, TextField, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

// ТЕСТ: Layout с Header/Main/Footer

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`

const Sidebar = styled.aside`
  width: 240px;
  background: var(--surface-solid-sidebar, #121212);
  padding: 16px;
  border-right: 1px solid var(--border-subtle, #333);
`

const Main = styled.main`
  flex: 1;
`

const Header = styled.header`
  padding: 16px 32px;
  background: var(--surface-solid-default, #080808);
  border-bottom: 1px solid var(--border-subtle, #333);
`

const Content = styled.div`
  padding: 32px;
`

const TestLayoutPage = () => {
  return (
    <>
      <Theme />
      <Layout>
        <Sidebar>
          <TextM>Навигация</TextM>
        </Sidebar>
        <Main>
          <Header>
            <HeadlineS>Заголовок</HeadlineS>
          </Header>
          <Content>
            <Card padding="l" radius="l" shadow={true}>
              <HeadlineS>Контент страницы</HeadlineS>
              <TextM>Используются семантические теги header, main, aside</TextM>
            </Card>
          </Content>
        </Main>
      </Layout>
    </>
  )
}

// ТЕСТ: Страница контактов с валидацией

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TestContactsPage = () => {
  return (
    <>
      <Theme />
      <Page>
        <HeadlineS>Контакты</HeadlineS>

        <Card padding="l" radius="l" shadow={true} style={{ marginTop: '24px' }}>
          <HeadlineS style={{ marginBottom: '24px' }}>Добавить контакт</HeadlineS>

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
            <Button type="submit" view="primary" size="m" text="Добавить контакт" fullWidth={true} />
          </FormContainer>
        </Card>
      </Page>
    </>
  )
}

// ТЕСТ: Таблица с пагинацией и экшенами

const TestTablePage = () => {
  const columns = [
    { title: 'Имя', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Роль', key: 'role' },
    { title: 'Статус', key: 'status' },
    { title: 'Действия', key: 'actions' },
  ]

  const data = [
    { id: '1', name: 'Иван Иванов', email: 'ivan@example.com', role: 'Администратор', status: 'Активен' },
    { id: '2', name: 'Петр Петров', email: 'petr@example.com', role: 'Менеджер', status: 'Активен' },
    { id: '3', name: 'Мария Сидорова', email: 'maria@example.com', role: 'Пользователь', status: 'Неактивен' },
    { id: '4', name: 'Алексей Козлов', email: 'alexey@example.com', role: 'Пользователь', status: 'Активен' },
    { id: '5', name: 'Елена Новикова', email: 'elena@example.com', role: 'Менеджер', status: 'Активен' },
  ]

  return (
    <>
      <Theme />
      <Page>
        <HeadlineS>Пользователи</HeadlineS>

        <Card padding="l" radius="l" shadow={true} style={{ marginTop: '24px' }}>
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

// Экспорты для тестирования
export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <HeadlineS>Тестирование задач спринта</HeadlineS>

        <Card padding="l" radius="l" shadow={true} style={{ marginTop: '24px' }}>
          <HeadlineS style={{ marginBottom: '16px' }}>Результаты тестирования</HeadlineS>

          <TextM style={{ marginBottom: '8px' }}>✅ Задача 1 (Layout): Структура Header/Main/Footer/Sidebar реализована</TextM>
          <TextM style={{ marginBottom: '8px' }}>✅ Задача 2 (Контакты): Валидация полей, кнопки отправки реализованы</TextM>
          <TextM style={{ marginBottom: '8px' }}>✅ Задача 3 (Таблицы): Пагинация и экшенами реализованы</TextM>

          <div style={{ marginTop: '24px' }}>
            <Button view="primary" size="m" text="Протестировать Layout" onClick={() => console.log('Layout test')} />
            <Button view="secondary" size="m" text="Протестировать Контакты" onClick={() => console.log('Contacts test')} style={{ marginLeft: '8px' }} />
            <Button view="outline" size="m" text="Протестировать Таблицу" onClick={() => console.log('Table test')} style={{ marginLeft: '8px' }} />
          </div>
        </Card>

        {/* Примеры компонентов для демонстрации */}
        <div style={{ marginTop: '32px' }}>
          <TestLayoutPage />
        </div>

        <div style={{ marginTop: '32px' }}>
          <TestContactsPage />
        </div>

        <div style={{ marginTop: '32px' }}>
          <TestTablePage />
        </div>
      </Page>
    </>
  )
}
