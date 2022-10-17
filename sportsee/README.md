# Complete project

The complete project is available here:
https://github.com/Guts6667/Y2_P12_SportSee_Rayan-Chambet.git
(It contains the backend and the frontend)

# Backend of the project

The backend is available:
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git

# Install the project

Run `yarn install` or `npm install` at the base of the project

# Start the project

In the root directory, run `yarn dev` or `npm run dev`

In the "sportsee" directory, run `yarn start` or `npm run start`

# Description

## Goal

In this project, the goal was to realized a MVP of an application displaying datas related to the sport activity of two users.

## Datas

Two types of datas are retrieved using fetch:

- Mocked Datas
  Two folders called "data12" & "data18" have been created in "public".

- Micro API
  The API retrieved through the "Micro API" are available via these links:

      - `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
      - `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
      - `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
      - `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

Example of query:

    `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
    `http://localhost:3000/user/18` - Retrieves user 18's main information.

## Recharts

The datas are rendered using Recharts.
See documentation here: `https://recharts.org/en-US/`

If you wish to install recharts your self run `npm install recharts` or `yarn add recharts`
