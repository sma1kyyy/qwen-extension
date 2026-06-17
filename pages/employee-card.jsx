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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
`

const Field = styled.div``

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

        <Card style={{ background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <HeroRow>
              <Avatar
                url="https://cdn-icons-png.flaticon.com/512/4140/4140045.png"
                name="Алексей Петров"
                size="xl"
              />
              <HeroInfo>
                <H4>Алексей Петров</H4>
                <MetaRow>
                  <Badge view="positive" size="s">Активен</Badge>
                  <TextS color="var(--text-secondary)">ID: EMP-2024-001</TextS>
                </MetaRow>
                <TextM color="var(--text-secondary)" style={{ marginTop: '6px' }}>
                  alexey.petrov@bank.ru
                </TextM>
                <TextS color="var(--text-secondary)">Кредитный эксперт</TextS>
              </HeroInfo>
            </HeroRow>
          </CardBody>
        </Card>

        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4>Подразделение</H4>
            <Grid>
              <Field>
                <FieldLabel>Отдел</FieldLabel>
                <FieldValue>Кредитный отдел</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Подразделение</FieldLabel>
                <FieldValue>Отделение №456</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Дата приёма</FieldLabel>
                <FieldValue>15.03.2024</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Руководитель</FieldLabel>
                <FieldValue>Мария Смирнова</FieldValue>
              </Field>
              <Field style={{ gridColumn: '1 / -1' }}>
                <FieldLabel>Местоположение</FieldLabel>
                <FieldValue>г. Москва, ул. Пушкина, д. 10</FieldValue>
              </Field>
            </Grid>
          </CardBody>
        </Card>

        <Card style={{ marginTop: '16px', background: 'var(--surface-solid-card)' }}>
          <CardBody>
            <H4>Контакты</H4>
            <Grid style={{ marginTop: '16px' }}>
              <Field>
                <FieldLabel>Внутренний номер</FieldLabel>
                <FieldValue>1234</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Мобильный</FieldLabel>
                <FieldValue>+7 (916) 123-45-67</FieldValue>
              </Field>
              <Field>
                <FieldLabel>Skype</FieldLabel>
                <FieldValue>alexey.petrov</FieldValue>
              </Field>
            </Grid>
          </CardBody>
        </Card>

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
