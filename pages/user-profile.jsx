import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Avatar, Badge, Button, Card, Divider, HeadlineS, TextM, TextS } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: var(--surface-solid-default, #080808);
  color: var(--text-primary, #ffffff);
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-subtle);
`

const Label = styled(TextS)`
  color: var(--text-secondary, #888);
`

const Value = styled(TextM)`
  font-weight: 500;
`

const UserProfile = () => {
  return (
    <>
      <Theme />
      <Page>
        <HeadlineS style={{ marginBottom: '32px' }}>Профиль пользователя</HeadlineS>

        <Card padding="l" radius="l" shadow={true}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
            <Avatar url="/avatar.jpg" name="Иван Иванов" size="xl" />
            <div>
              <HeadlineS style={{ marginBottom: '8px' }}>Иван Иванов</HeadlineS>
              <Badge tone="success" size="m">Активен</Badge>
            </div>
          </div>

          <Divider padding="m" />

          <InfoRow>
            <Label>Телефон</Label>
            <Value>+7 (999) 123-45-67</Value>
          </InfoRow>
          <InfoRow>
            <Label>Email</Label>
            <Value>ivan@example.com</Value>
          </InfoRow>
          <InfoRow>
            <Label>Баланс</Label>
            <Value style={{ color: 'var(--success-color, #4CAF50)' }}>150 000 ₽</Value>
          </InfoRow>
          <InfoRow>
            <Label>Дата регистрации</Label>
            <Value>01.01.2024</Value>
          </InfoRow>

          <Divider padding="m" />

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <Button view="primary" size="m" text="Редактировать" fullWidth={true} />
            <Button view="outline" size="m" text="В��грузить" fullWidth={true} />
          </div>
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
        <HeadlineS style={{ marginBottom: '32px' }}>Профиль пользователя</HeadlineS>

        <Card padding="l" radius="l" shadow={true}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
            <Avatar url="/avatar.jpg" name="Иван Иванов" size="xl" />
            <div>
              <HeadlineS style={{ marginBottom: '8px' }}>Иван Иванов</HeadlineS>
              <Badge tone="success" size="m">Активен</Badge>
            </div>
          </div>

          <Divider padding="m" />

          <InfoRow>
            <Label>Телефон</Label>
            <Value>+7 (999) 123-45-67</Value>
          </InfoRow>
          <InfoRow>
            <Label>Email</Label>
            <Value>ivan@example.com</Value>
          </InfoRow>
          <InfoRow>
            <Label>Баланс</Label>
            <Value style={{ color: 'var(--success-color, #4CAF50)' }}>150 000 ₽</Value>
          </InfoRow>
          <InfoRow>
            <Label>Дата реги��трации</Label>
            <Value>01.01.2024</Value>
          </InfoRow>

          <Divider padding="m" />

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <Button view="primary" size="m" text="Редактировать" fullWidth={true} />
            <Button view="outline" size="m" text="Выгрузить" fullWidth={true} />
          </div>
        </Card>
      </Page>
    </>
  )
}
