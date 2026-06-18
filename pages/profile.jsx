import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Avatar, Badge, Button, Card, H3, TextM, TextS } from '@salutejs/plasma-web'

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

const ProfileRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`

const UserInfo = styled.div`
  flex: 1;
`

const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`

const SecurityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <>
      <Theme />
      <Page>
        <H3>Профиль пользователя</H3>

        <Card>
          <CardBody>
            <ProfileRow>
              <Avatar url="https://via.placeholder.com/150" name="Иван Иванов" size="l" />

              <UserInfo>
                <H3 style={{ marginBottom: '8px' }}>Иван Иванов</H3>
                <TextM color="var(--text-secondary)">ivan@example.com</TextM>

                <StatusInfo>
                  <Badge view="success">Активен</Badge>
                  <TextS color="var(--text-secondary)">ID: 12345</TextS>
                </StatusInfo>

                <ButtonGroup>
                  <Button view="primary" size="m" text="Редактировать профиль" />
                  <Button view="secondary" size="m" text="Изменить аватар" />
                </ButtonGroup>
              </UserInfo>
            </ProfileRow>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <H3>Настройки безопасности</H3>

            <SecurityItem>
              <TextBlock>
                <TextM>Двухфакторная аутентификация</TextM>
                <TextS color="var(--text-secondary)">Добавьте дополнительный уровень защиты</TextS>
              </TextBlock>
              <Badge view="success">Включено</Badge>
            </SecurityItem>

            <SecurityItem>
              <TextBlock>
                <TextM>Сессии</TextM>
                <TextS color="var(--text-secondary)">Управление активными сессиями</TextS>
              </TextBlock>
              <Button view="secondary" size="m" text="Управление" />
            </SecurityItem>
          </CardBody>
        </Card>
      </Page>
    </>
  )
}