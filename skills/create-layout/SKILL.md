---
name: create-layout
description: Создает reusable layout-компонент для страниц
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
import { CContainer, CSidebar, CSidebarHeader, CSidebarFooter, CSidebarBody } from '@coreui/react'

const {LayoutName} = ({ children }) => {
  return (
    <CSidebar colorScheme="dark" position="start">
      <CSidebarHeader className="d-flex align-items-center">
        <div>Логотип</div>
      </CSidebarHeader>
      <CSidebarBody>
        {/* Навигация */}
      </CSidebarBody>
      <CSidebarFooter className="d-flex align-items-center">
        <div>Footer</div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default {LayoutName}
```

**Тип 2 (С хедером):**
```jsx
import { CContainer, CHeader, CHeaderNav } from '@coreui/react'

const {LayoutName} = ({ children }) => {
  return (
    <CHeader colorScheme="dark" className="mb-4">
      <CHeaderNav>
        {/* Навигация */}
      </CHeaderNav>
    </CHeader>
  )
}

export default {LayoutName}
```

**Тип 3 (С футером):**
```jsx
import { CContainer, CFooter } from '@coreui/react'

const {LayoutName} = ({ children }) => {
  return (
    <>
      <CFooter className="bg-light">
        <div>Footer content</div>
      </CFooter>
    </>
  )
}

export default {LayoutName}
```

**Тип 4 (Пустой):**
```jsx
const {LayoutName} = ({ children }) => {
  return <>{children}</>
}

export default {LayoutName}
```

**Тип 5 (Комбинированный - сайдбар + хедер):**
```jsx
import { CContainer, CSidebar, CHeader, CHeaderNav } from '@coreui/react'

const {LayoutName} = ({ children }) => {
  return (
    <>
      <CHeader colorScheme="dark" className="mb-4">
        <CHeaderNav>
          {/* Навигация */}
        </CHeaderNav>
      </CHeader>
      <CSidebar colorScheme="dark" position="start">
        <CSidebarBody>
          {/* Навигация */}
        </CSidebarBody>
      </CSidebar>
    </>
  )
}

export default {LayoutName}
```

**Примечание:** 
- Замените `{LayoutName}` на фактическое название layout'а (в PascalCase)
- Если выбрана навигация — добавьте базовые элементы навигации в соответствующие места
- Все каталоги и файлы создаются только после подтверждения пользователем
