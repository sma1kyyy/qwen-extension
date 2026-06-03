---
name: generate-page
description: Создает jsx разметку страницы на основе задачи от пользователя с возможностью использования layout'ов
---

# generate-page

## Инструкция

Ваша задача: создать самодостаточный фрагмент JSX-кода, реализующий поставленную задачу от пользователя

### Шаг 1: Сбор требований

Если пользователь просит создать страницу, но не описал требования — запросите эту информацию.

**Запрос 1: Нужен ли layout?**
- Спросите: "Нужен ли layout для этой страницы? (yes/no)"
- Если "yes" или "y" — перейдите к Шагу 2
- Если "no" или "n" — перейдите к Шагу 3 (генерация без layout)

### Шаг 2: Выбор layout'а (если выбран "да")

**Запрос 2: Выбор layout'а**
- Покажите список доступных layout'ов из папки `layouts/`
- Спросите: "Выберите layout для страницы"
- **Валидация:** пользователь должен выбрать существующий layout из списка
- Если неверный — сообщите: "Пожалуйста, выберите layout из списка"
- Повторяйте запрос до тех пор, пока не будет выбран валидный layout

### Шаг 3: Генерация контента с оберткой в layout

**Правило обертки:**
- Код страницы помещается ВНУТРЬ компонента layout'а как jsx копированием
- Результат — готовый компонент страницы полученый с помощью объединения layout и созданной страницы
Пример объединения
```tsx
import {
  CContainer, CHeader, CHeaderNav, CFooter, CNav, CNavItem,
  CNavLink, CRow, CCol, CCard, CCardHeader, CCardBody,
  CListGroup, CListGroupItem, CBadge
} from '@coreui/react';

const DefaultLayout = ({ children }) => (
  <>
    <CHeader colorScheme="dark" className="mb-4">
      <CHeaderNav>
        <CNav>
          <CNavItem><CNavLink href="#">Все задачи</CNavLink></CNavItem>
          <CNavItem><CNavLink href="#">Выйти</CNavLink></CNavItem>
        </CNav>
      </CHeaderNav>
    </CHeader>
    <CContainer>{children}</CContainer>
    <CFooter className="bg-light"><div>Footer content</div></CFooter>
  </>
);

const TodoList = () => {
  const tasks = [
    { id: 1, title: 'Разработка документации', description: 'Создание технической документации по проекту', priority: 'Высокая', assignee: 'Иванов Иван Иванович' },
  ];

  return (
    <DefaultLayout>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard className="mb-4">
            <CCardHeader><h4>Список задач</h4></CCardHeader>
            <CCardBody>
              <CListGroup>
                {tasks.map(t => (
                  <CListGroupItem key={t.id}>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{t.title}</h5>
                      <CBadge color={t.priority==='Высокая'?'danger':t.priority==='Средняя'?'warning':'success'}>
                        {t.priority}
                      </CBadge>
                    </div>
                    <p className="mb-1">{t.description}</p>
                    <small>Исполнитель: {t.assignee}</small>
                  </CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </DefaultLayout>
  );
};

export default TodoList;
```
### Шаг 4: Дополнительные требования

Если пользователь просит создать разметку комплексных данных (списков, карточек, таблиц) — запрашивайте атрибутный состав.

Задавайте дополнительные вопросы если есть сомнения в чем либо.

### Технические требования:

- **Стек по умолчанию:** React, CoreUI for React.
- **Prisma UI режим:** если пользователь явно просит Prisma UI или код уже сгенерирован skill `prisma-ui`, сохраняйте этот код без переписывания на CoreUI. В этом режиме импорт должен идти из `@prisma-ui/react`, а правила и props берутся из `skills/prisma-ui/docs/components.md`.
- **Архитектура:** функциональный стиль компонентов.
- **Ограничения для CoreUI режима:** запрещено использовать хуки (`useState` и др.), а также писать реализацию обработчиков событий (`actions`). Код должен быть статичным и не зависеть от состояния.
- **Ограничения для Prisma UI режима:** hooks допустимы только когда интерактивность обязательна (`Modal`, `Tabs`, `Toast`, управляемые overlay-компоненты). Для статичных страниц hooks не добавляйте.
- **Импорт:** не смешивайте UI-kit библиотеки в одном компоненте. Используйте либо CoreUI (`@coreui/react`), либо Prisma UI (`@prisma-ui/react`) в зависимости от выбранного режима.
- **Самодостаточность:** весь необходимый JSX-код должен быть представлен в одном фрагменте. Не допускается использование внешних файлов или импортов, кроме выбранного UI-kit и `react` для обязательных hooks.
- **Формат ответа:** предоставьте только JSX-разметку без комментариев, пояснений или дополнительного текста. Код должен быть готов к копированию и вставке в файл компонента.

### Сохранение

Сохраните страницу в папку `pages/` с именем `{название-страницы}.jsx`.
Если в skill передан уже готовый JSX-код, записывайте его как есть и не меняйте выбранный UI-kit