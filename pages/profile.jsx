import { Avatar, Badge, Button, Card, Heading, Inline, Page, Section, Stack, Text } from '@prisma-ui/react'

const ProfilePage = () => {
  return (
    <Page title="Профиль" description="Основная информация об аккаунте" maxWidth="lg">
      <Stack gap="lg">
        <Section title="Персональные данные" description="Личная информация пользователя">
          <Card padding="lg">
            <Stack gap="lg">
              <Inline gap="lg" align="start">
                <Avatar src="/avatar.jpg" name="Иван Иванов" size="xl" />
                <Stack gap="md">
                  <Heading level={3}>Иван Иванов</Heading>
                  <Inline gap="sm" align="center">
                    <Badge tone="success">Активен</Badge>
                    <Text tone="muted">ivan@example.com</Text>
                  </Inline>
                </Stack>
              </Inline>
              <Inline gap="sm">
                <Button variant="primary">Редактировать профиль</Button>
                <Button variant="outline">Изменить аватар</Button>
              </Inline>
            </Stack>
          </Card>
        </Section>

        <Section title="Настройки безопасности" description="Управление паролем и доступом">
          <Card padding="lg">
            <Stack gap="md">
              <Inline justify="between" align="center">
                <Stack gap="xs">
                  <Text weight="medium">Двухфакторная аутентификация</Text>
                  <Text tone="muted" size="sm">Добавьте дополнительный уровень защиты</Text>
                </Stack>
                <Badge tone="success">Включено</Badge>
              </Inline>
              <Inline justify="end">
                <Button variant="secondary">Управление</Button>
              </Inline>
            </Stack>
          </Card>
        </Section>

        <Section title="Статистика аккаунта" description="Основные показатели использования">
          <Card padding="lg">
            <Stack gap="md">
              <Inline justify="between" align="center">
                <Stack gap="xs">
                  <Text weight="medium">Дата регистрации</Text>
                  <Text tone="muted" size="sm">2024-01-15</Text>
                </Stack>
                <Badge tone="info">Pro</Badge>
              </Inline>
              <Inline justify="between" align="center">
                <Stack gap="xs">
                  <Text weight="medium">Последний вход</Text>
                  <Text tone="muted" size="sm">Сегодня, 10:30</Text>
                </Stack>
              </Inline>
            </Stack>
          </Card>
        </Section>
      </Stack>
    </Page>
  )
}

export default ProfilePage
