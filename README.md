# Table of Contents
- [How to run](#how-to-run)
- [Overview](#overview)
- [Design](#design)
- [Project Structure](#project-structure)
- [Demo Video](#demo)

## How to run
- Install [Laravel 11](https://laravel.com/docs/11.x/installation).
- Install [Node-LTS](https://nodejs.org/en).
- Install [RethinkDB](https://rethinkdb.com/docs/install/).

- Run RethinkDB via the command `rethinkdb` (accessible through: `http://localhost:8080/`).
- cd to the project_folder and run `composer install`.
- run `php artisan serve` (accessible through: `http://localhost:8000/`).
- run `php artisan migrate`.
- cd to the project_folder/next and run `npm install`.
- Then run `npm run dev` (accessible through: `http://localhost:3000/`).

**You're ready to try.**


## Overview
- Laravel APIs, NextJs (Typescript) Front-end, and RethinkDB are used.
- Fixed issues inside the core of Laravel 11 files and RethinkDB Package, in order to different compatibility versions between Laravel 11 and RethinkDB.
- Users can add New Task `/api/add-new-task` to RethinkDB.
- Users can display their tasks `/api/tasks/{status}` from RethinkDB after either seeding to the database dummy tasks using command `php artisan db:seed --class=TaskSeeder` or Add New One from the Front End.
- A hardcoded data also exists but not used.

## Design
- Simple, modern, and light design.
- Followed UI/UX best practices with different media queries.
- TailwindCSS is used for styling.

## Project Structure
- App starting at `Page.tsx` and it includes `/components/TasksList.tsx`.
- At first, `/components/TasksList.tsx` fetches all the tasks by calling a Laravel GET API `/api/tasks/{status}`, and pass `status` with 'all', and then fetch through `TaskController.index`.
- If a task clicked, it will open up a `/components/ViewTask.tsx` Modal, in order to get the full description for this task.
- If the selectedTab for status is changed, a Laravel GET API `/api/tasks/{status}` is called with the selectedTab (status) name, then `TaskController.index` return only the tasks for this status.
- Tasks can be added from `/components/AddNewTask.tsx` form, after clicking on the (+) button, a Laravel POST API `/api/add-new-task` is then sent with formData, in order to insert into RethinkDB through `TaskController.store`.
- `/next/utils/api.ts` is responsible for managing APIs requests and avoid repetitive code.

# Demo

https://github.com/user-attachments/assets/aceb8fef-a400-4a9e-9ce9-a3dabee62b97



