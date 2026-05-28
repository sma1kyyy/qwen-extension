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

- **Стэк:** React, CoreUI for React.
- **Архитектура:** Функциональный стиль компонентов.
- **Ограничения:** Запрещено использовать хуки (useState и др.), а также писать реализацию обработчиков событий (actions). Код должен быть статичным и не зависеть от состояния.
- **Импорт:** Разрешено использовать только компоненты из официальной библиотеки CoreUI for React. Запрещено ссылаться на п��льзовательские компоненты или файлы вне этого фрагмента.
- **Самодостаточность:** Весь необходимый JSX-код должен быть представлен в одном фрагменте. Не допускается использование внешних файлов или импортов, кроме стандартных для CoreUI.
- **Формат ответа:** Вы должны предоставить только JSX-разметку без каких-либо комментариев, пояснений или дополнительного текста. Код должен быть готов к копированию и вставке в файл компонента.

### Сохранение

Сохраните страницу в папку `pages/` с именем `{название-страницы}.jsx`
