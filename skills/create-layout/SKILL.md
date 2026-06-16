---
name: create-layout
description: Создаёт переиспользуемый layout-каркас (sidebar / header / footer / комбинированный) в папке layouts/ на Plasma Web. Когда применять (или максимально похоже по смыслу): создание layout, общий каркас для страниц, шаблон с сайдбаром/хедером/футером. Не для финальной страницы — для неё generate-page.
---

# create-layout

## Инструкция

### Шаг 1: Сбор данных

**Запрос 1: Название layout'а**
- Спросите: "Укажите название layout'а (например: dashboard, auth, blank)"
- **Валидация:** название не может быть пустым
- Если пустое — сообщите: "Название обязательно для заполнения. Пожалуйста, введите название."
- Повторяйте запрос до тех пор, пока не будет получено валидное название

**Запрос 2: Тип layout'а**
- Спросите: "Выберите тип layout'а:
1. С сайдбаром
2. С хедером
3. С футером
4. Пустой (без декораций)
5. Комбинированный (сайдбар + хедер)

Введите номер варианта:"
- **Валидация:** должен быть введен номер от 1 до 5
- Если неверный — сообщите: "Пожалуйста, выберите номер от 1 до 5"
- Повторяйте запрос до тех пор, пока не будет получен валидный ответ

**Запрос 3: Навигация**
- Спросите: "Нужна ли навигация в layout'е? (yes/no)"
- Если "yes" или "y" — добавить навигационное меню
- Если "no" или "n" — без навигации

### Шаг 2: Подтверждение данных

Покажите пользователю сводку:
```
Проверьте данные:
Название: {название}
Тип: {описание типа по номеру}
Навигация: {да/нет}

Сохранить? (yes/no)
```

**Обработка ответа:**
- Если "yes" или "y" — перейдите к Шагу 3
- Если "no" или "n" — начните заново с Шага 1
- Если другой ответ — повторите запрос подтверждения

### Шаг 3: Создание layout'а

Создайте файл `layouts/{название}.jsx` со следующим содержимым в зависимости от типа:

**Тип 1 (С сайдбаром):**
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

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

const Content = styled.div`
  padding: 32px;
`

const {LayoutName} = ({ children }) => {
  return (
    <>
      <Theme />
      <Layout>
        <Sidebar>
          <TextM style={{ marginBottom: '16px' }}>Навигация</TextM>
          {/* Навигация */}
        </Sidebar>
        <Main>
          <Content>{children}</Content>
        </Main>
      </Layout>
    </>
  )
}

export default {LayoutName}
```

**Тип 2 (С хедером):**
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Layout = styled.div`
  min-height: 100vh;
`

const Header = styled.header`
  padding: 16px 32px;
  background: var(--surface-solid-default, #080808);
  border-bottom: 1px solid var(--border-subtle, #333);
`

const Content = styled.div`
  padding: 32px;
`

const {LayoutName} = ({ children }) => {
  return (
    <>
      <Theme />
      <Layout>
        <Header>
          <TextM>Логотип</TextM>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </>
  )
}

export default {LayoutName}
```

**Тип 3 (С футером):**
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

const Layout = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
`

const Footer = styled.footer`
  padding: 16px 32px;
  background: var(--surface-solid-default, #080808);
  border-top: 1px solid var(--border-subtle, #333);
`

const Content = styled.div`
  padding: 32px;
`

const {LayoutName} = ({ children }) => {
  return (
    <>
      <Theme />
      <Layout>
        <Main>
          <Content>{children}</Content>
        </Main>
        <Footer>
          <TextM>Footer content</TextM>
        </Footer>
      </Layout>
    </>
  )
}

export default {LayoutName}
```

**Тип 4 (Пустой):**
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'

const Theme = createGlobalStyle(plasma_web__dark)

const Content = styled.div`
  min-height: 100vh;
  padding: 32px;
`

const {LayoutName} = ({ children }) => {
  return (
    <>
      <Theme />
      <Content>{children}</Content>
    </>
  )
}

export default {LayoutName}
```

**Тип 5 (Комбинированный - сайдбар + хедер):**
```jsx
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { plasma_web__dark } from '@salutejs/plasma-themes'
import { Button, TextM } from '@salutejs/plasma-web'

const Theme = createGlobalStyle(plasma_web__dark)

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

const {LayoutName} = ({ children }) => {
  return (
    <>
      <Theme />
      <Layout>
        <Sidebar>
          <TextM style={{ marginBottom: '16px' }}>Навигация</TextM>
          {/* Навигация */}
        </Sidebar>
        <Main>
          <Header>
            <TextM>Логотип</TextM>
          </Header>
          <Content>{children}</Content>
        </Main>
      </Layout>
    </>
  )
}

export default {LayoutName}
```

## Правила

1. **Запрещены "голые" div** — используйте `Header`, `Main`, `Footer`, `Sidebar`, `Content` как styled-components
2. **Всегда используйте `createGlobalStyle`** для подключения темы
3. **Экспорт:** `export default {LayoutName}`
4. **Layout должен быть reusable** — принимать `children` через props
5. **Используйте семантические теги:** `<header>`, `<main>`, `<footer>`, `<aside>`
6. **Все стили через styled-components** — никаких inline styles для layout компонентов

**Примечание:**
- Замените `{LayoutName}` на фактическое название layout'а (в PascalCase)
- Если выбрана навигация — добавьте базовые элементы навигации в соответствующие места
- Все каталоги и файлы создаются только после подтверждения пользователем
