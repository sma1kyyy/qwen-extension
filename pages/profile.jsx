import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Avatar, Badge, Button, Card, HeadlineS, TextL, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const ProfileCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
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
        <HeadlineS>Профиль пользователя</HeadlineS>

        <ProfileCard padding="l" radius="l" shadow={true}>
          <Avatar url="https://via.placeholder.com/150" name="Иван Иванов" size="l" />

          <UserInfo>
            <HeadlineS style={{ marginBottom: '8px' }}>Иван Иванов</HeadlineS>
            <TextM tone="neutral">ivan@example.com</TextM>

            <StatusInfo>
              <Badge tone="success">Активен</Badge>
              <TextS tone="neutral">ID: 12345</TextS>
            </StatusInfo>

            <ButtonGroup>
              <Button view="primary" size="m" text="Редактировать профиль" />
              <Button view="outline" size="m" text="Изменить аватар" />
            </ButtonGroup>
          </UserInfo>
        </ProfileCard>

        <Card padding="l" radius="l" shadow={true}>
          <HeadlineS style={{ marginBottom: '16px' }}>Настройки безопасности</HeadlineS>

          <SecurityItem>
            <TextBlock>
              <TextM>Двухфакторная аутентификация</TextM>
              <TextS tone="neutral">Добавьте дополнительный уровень защиты</TextS>
            </TextBlock>
            <Badge tone="success">Включено</Badge>
          </SecurityItem>

          <SecurityItem>
            <TextBlock>
              <TextM>Сессии</TextM>
              <TextS tone="neutral">Управление активными сессиями</TextS>
            </TextBlock>
            <Button view="secondary" size="m" text="Управление" />
          </SecurityItem>
        </Card>
      </Page>
    </>
  )
}
