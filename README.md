# React HW3 App

## Опис
Цей застосунок демонструє роботу з контрольованими та неконтрольованими компонентами у React, а також отримання даних з API. Всі форми стилізовані за допомогою Bootstrap.

## Основні можливості
- **ControlledForm** — контрольована форма з текстовим полем, чекбоксом та select. Всі значення керуються через useState.
- **UncontrolledForm** — неконтрольована форма з username та password полем, значення отримуються через референси (refs).
- **Api** — компонент, який отримує список користувачів з API (https://jsonplaceholder.typicode.com/users), показує стани loading, error, success.
- Bootstrap-стилі для всіх форм і списків.

## Структура проекту
react-hw3-app/
├── public/
│   └──vite.svg
│
├── src/
│   ├── App.tsx — головний компонент, що рендерить ControlledForm, UncontrolledForm, Api
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── ControlledForm.tsx
│       ├── UncontrolledForm.tsx
│       └── Api.tsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

## Запуск проекту
1. Встановіть залежності:
   npm install

2. Запустіть застосунок:
   npm run dev

## Приклад використання
- Введіть дані у форми та перевірте повідомлення про успіх/помилку.
- Перевірте завантаження та відображення списку користувачів з API.


