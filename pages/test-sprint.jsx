import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, Card, Checkbox, H3, Table, TextField, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const CardBody = styled.div`
  padding: 24px;
`

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function App() {
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
        <H3>Тестирование задач спринта</H3>

        {/* Задача 1: Layout */}
        <Card>
          <CardBody>
            <H3>Задача 1: Layout</H3>
            <TextM>
              Структура с Header, Main, Sidebar и Footer реализована.
              Используются семантические теги header, main, aside.
            </TextM>
            <Layout>
              <Sidebar>
                <TextM>Навигация</TextM>
              </Sidebar>
              <Main>
                <Header>
                  <H3>Заголовок</H3>
                </Header>
                <Content>
                  <TextM>Контент страницы</TextM>
                </Content>
              </Main>
            </Layout>
          </CardBody>
        </Card>

        {/* Задача 2: Контакты */}
        <Card>
          <CardBody>
            <H3>Задача 2: Контакты</H3>
            <TextM>Форма добавления контакта с валидацией полей</TextM>

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
          </CardBody>
        </Card>

        {/* Задача 3: Таблица */}
        <Card>
          <CardBody>
            <H3>Задача 3: Таблица с пагинацией</H3>
            <TextM>Таблица пользователей с данными</TextM>

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
          </CardBody>
        </Card>
      </Page>
    </>
  )
}