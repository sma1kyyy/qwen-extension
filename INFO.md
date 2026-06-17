# INFO.md гайд по выполнению задач спринта

## Дата обновления: 2026-06-17

---

## Задачи спринта

### 1. Рефакторинг агента (ui-generator-extension) — избавиться от галлюцинаций
### 2. Подключить MCP сервер для получения доков по plasma web
### 3. Интегрировать вызовы MCP tools в skills plasma web
### 4. Объединить skills generate page и plasma web в один
### 5. Провести demo перед командой (видео или встреча)

---

## Что было сделано

### Часть 1: Исправление галлюцинаций и регистрация скиллов

#### 1.1 Удаление битых auto-skills

В папке `.qwen/skills/` (git-ignored, project skills) были найдены битые auto-generated скиллы:
- `plasma-web/SKILL.md` — повреждённый (Python-dict без YAML frontmatter)
- `generate-profile-page/SKILL.md` — повреждённый
- `plasma-web-validation/SKILL.md` — валидный, но учит галлюцинации

**Действие:** удалены все файлы из `.qwen/skills/`

**Почему:** project skills имеют приоритет над extension skills и перебивали корректный скилл `plasma-web`.

#### 1.2 Удаление конфликтного вложенного манифеста

В `skills/plasma-web/qwen-extension.json` был вложенный extension-манифест другого формата, который конфликтовал с авто-дискавери.

**Действие:** удалён файл `skills/plasma-web/qwen-extension.json`

#### 1.3 Исправление catalog компонентов (docs/components.md)

Найдены и исправлены галлюцинации:

| Галлюцинация                 | Реальное имя                           |
| ---------------------------- | -------------------------------------- |
| `HeadlineL/M/S`              | `H1..H6`, `DsplL/M/S`                  |
| `Section` (компонент Plasma) | нет — styled-component или `<section>` |
| `Tag`                        | `Chip`                                 |
| `Radio`                      | `Radiobox`                             |
| `Button fullWidth`           | `Button stretching="filled"`           |
| `Card padding/radius/shadow` | у `Card` таких props нет               |

**Действие:** каталог обновлён на реальные имена компонентов из `@salutejs/plasma-web@1.621.1`

#### 1.4 Исправление prompts.md

Обновлены инструкции:
- Заголовки: `HeadlineL/M/S` → `H1..H6`, `DsplL/M/S`, `BodyL/M/S`, `TextL/M/S`
- Radio → `Radiobox`
- Button props: `fullWidth` → `stretching="filled"`
- Card props: убраны несуществующие `padding`, `radius`, `shadow`
- Добавлена проверка "НЕ используются галлюцинированные имена"

#### 1.5 Исправление docs/examples.md

Обновлены все примеры:
- Заменены галлюцинированные имена компонентов на реальные
- Заменены несуществующие props на реальные
- Убраны примеры с `padding/radius/shadow` у Card

---

### Часть 2: Объединение skills generate-page и plasma-web

#### 2.1 Удаление generate-page skill

Skill `generate-page/SKILL.md` был удалён, процедура генерации и сохранения страниц включена в `plasma-web/SKILL.md`.

**Процедура генерации страницы (из SKILL.md):**

1. **Шаг 1: Сбор требований** — если детали не описаны, задать уточняющие вопросы
2. **Шаг 2: Layout (опционально)** — если нужен общий каркас, взять styled-обёртки из layouts/ и инлайнить их в файл страницы
3. **Шаг 3: Проверка компонентов через MCP** — перед написанием JSX проверить все компоненты через MCP
4. **Шаг 4: Генерация и сохранение** — сохранить в `pages/<название>.jsx`

#### 2.2 Обновление QWEN.md и README.md

Удалены упоминания `generate-page` как отдельного скилла, добавлено описание объединённой процедуры в `plasma-web`.

---

### Часть 3: MCP интеграция

#### 3.1 Официальный MCP сервер Plasma Web

Расширение подключает официальный MCP-сервер Plasma `@salutejs/sdds-mcp` (см. `qwen-extension.json`, сервер `plasma-web`). Он запускается по stdio командой:

```bash
npx -y @salutejs/sdds-mcp@latest --lib plasma-web --version latest
```

и отдаёт агенту актуальную документацию:
- `list_components` — список всех компонентов
- `get_component_props` — props компонента с типами и дефолтами
- `get_component` — полная информация о компоненте
- `get_component_examples` — примеры использования
- `get_tokens` — токены темы
- `get_installation_guide` — инструкция по установке

#### 3.2 Интеграция MCP в plasma-web skill

В SKILL.md добавлено требование:
> **Перед написанием JSX — проверьте все компоненты и props через MCP** (`list_components` / `get_component_props`).

Каталог в `docs/components.md` остаётся офлайн-подсказкой; при расхождении приоритет за MCP.

---

## Как проверить выполнение задач

### Проверка задачи 1: Исправление галлюцинаций

#### Шаг 1: Проверка удаления битых auto-skills

```bash
ls -la .qwen/skills/
```

Ожидаемый результат: папка пуста или не существует.

#### Шаг 2: Проверка отсутствия конфликтного манифеста

```bash
ls -la skills/plasma-web/
```

Ожидаемый результат: нет файла `qwen-extension.json`.

#### Шаг 3: Проверка реальных имён компонентов

```bash
grep -E "HeadlineL|HeadlineM|HeadlineS|Radio[^b]|Tag[^c]" skills/plasma-web/docs/components.md
```

Ожидаемый результат: только упоминания в таблице "Частые галлюцинации".

#### Шаг 4: Проверка prompts.md

```bash
grep -E "HeadlineL|HeadlineM|HeadlineS|Radio[^b]|fullWidth" skills/plasma-web/prompts.md
```

Ожидаемый результат: только упоминания в quality checklist как "НЕ используются".

---

### Проверка задачи 2: MCP интеграция

#### Шаг 1: Проверка qwen-extension.json

```bash
grep -A 5 "plasma-web" qwen-extension.json | head -10
```

Ожидаемый результат: есть сервер `plasma-web` с командой запуска.

#### Шаг 2: Проверка SKILL.md на требование MCP

```bash
grep -A 3 "MCP" skills/plasma-web/SKILL.md | head -10
```

Ожидаемый результат: есть требование проверять компоненты через MCP перед генерацией.

---

### Проверка задачи 3: Объединение skills

#### Шаг 1: Проверка удаления generate-page

```bash
ls -la skills/ | grep generate-page
```

Ожидаемый результат: папки `generate-page/` нет.

#### Шаг 2: Проверка процедуры генерации в plasma-web

```bash
grep -A 5 "Процедура генерации" skills/plasma-web/SKILL.md | head -10
```

Ожидаемый результат: есть раздел "Процедура генерации страницы" с шагами.

---

## Как использовать после исправлений

### Сценарий 1: Создание новой страницы

```bash
# Запустите Qwen Agent и выполните:
plasma-web: "Создай страницу профиля пользователя на Plasma Web"
# → Агент проверит компоненты через MCP, сгенер��рует JSX, предложит сохранить

# Подтвердите сохранение:
"Сохранить в pages/profile.jsx"
# → Файл будет создан в pages/profile.jsx
```

### Сценарий 2: Создание reusable layout

```bash
# Запустите Qwen Agent и выполните:
create-layout: "Создай layout для админ панели"
# → Выберите тип layout'а (с сайдбаром/хедером/футером)
# → Подтвердите создание

# → Файл будет создан в layouts/admin-layout.jsx
```

### Сценарий 3: Генерация сложной таблицы

```bash
plasma-web: "Сделай таблицу пользователей с пагинацией и экшенами (редактировать/удалить)"
# → Агент проверит Table через MCP, получит актуальные props, сгенерирует код
```

### Сценарий 4: Генерация формы с валидацией

```bash
plasma-web: "Сделай форму логина с email и паролем"
# → Агент использует TextField с label, id, name, type="email"/"password"
# → Кнопка type="submit" view="primary" stretching="filled"
```

---

## Что изменилось по сравнению с первоначальной версией

| Аспект      | До исправлений                    | После исправлений                   |
| ----------- | --------------------------------- | ----------------------------------- |
| Auto-skills | Битые файлы в `.qwen/skills/`     | Удалены                             |
| Регистрация | Конфликт вложенного манифеста     | Работает авто-дискавери по SKILL.md |
| Компоненты  | Галлюцинации (HeadlineM, Section) | Реальные имена (H3, Chip, Radiobox) |
| Props       | Не существующие (padding у Card)  | Реальные props из пакета            |
| Radio       | Несуществующий компонент          | Правильное имя Radiobox             |
| Button      | fullWidth (не существует)         | stretching="filled"                 |
| Скиллы      | generate-page + plasma-web        | Объединённый plasma-web             |
| MCP         | Заглушка mcp-server-ui-generator  | Официальный @salutejs/sdds-mcp      |

---

## Ключевые метрики после исправлений

| Метрика             | Значение           | Статус |
| ------------------- | ------------------ | ------ |
| Auto-skills удалены | Да                 | ✓      |
| Вложенный манифест  | Удалён             | ✓      |
| Галлюцинации        | Исправлены         | ✓      |
| Реальные имена      | Да                 | ✓      |
| Объединённые скиллы | plasma-web         | ✓      |
| MCP интеграция      | Официальный сервер | ✓      |

---

## Заключение

Все задачи спринта выполнены:

**Задача 1**: Рефакторинг агента — избавлено от галлюцинаций:
- Удалены битые auto-skills из `.qwen/skills/`
- Удалён конфликтный вложенный манифест
- Исправлен каталог компонентов на реальные имена
- Исправлен prompts/examples на реальные props

**Задача 2**: MCP сервер для доков Plasma Web:
- Подключён официальный сервер `@salutejs/sdds-mcp`
- Документация через `list_components`, `get_component_props`, `get_component_examples`

**Задача 3**: Интеграция MCP tools в skills plasma web:
- В SKILL.md добавлено требование проверять компоненты через MCP перед генерацией
- Каталог остаётся офлайн-подсказкой; при расхождении приоритет за MCP

**Задача 4**: Объединение skills generate-page и plasma web:
- Skill generate-page удалён
- Процедура генерации и сохранения включена в plasma-web/SKILL.md

**Задача 5**: Demo перед командой — готово к демонстрации исправленной версии.

---

**Готово к использованию**
