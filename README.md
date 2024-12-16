# Table of Contents
- [How to run](#how-to-run)
- [Overview](#overview)
- [Design](#design)
- [Demo Video](#demo)

## How to run
- Install [Laravel 11](https://laravel.com/docs/11.x/installation).
- Install [Node-LTS](https://nodejs.org/en).
- Install [RethinkDB](https://rethinkdb.com/docs/install/).

- Run RethinkDB via the command `rethinkdb` (accessible through: `http://localhost:8080/`).
- cd to the project_folder and run `composer install`.
- run `php artisan serve` (accessible through: `http://localhost:8000/`).
- run `php artisan migrate`.
- cd to the project_folder/next and run `npm install` (accessible through: `http://localhost:3000/`).

**You're ready. 🎉**


## Overview
- Laravel APIs, NextJs (Typescript) Front-end, and RethinkDB are used.
- Fixed issues inside the core of Laravel 11 files and RethinkDB Package, in order to different compatibility versions between Laravel 11 and RethinkDB.
- Users can add New Task `/api/add-new-task` to RethinkDB.
- Users can display their tasks `/api/tasks/{status}` from RethinkDB after either seeding to the database dummy tasks `php artisan db:seed --class=TaskSeeder` or Add New One from the Front End.

## Design
- Simple, modern, and light design.
- Followed UI/UX best practices with different media queries.
- TailwindCSS is used for styling.

##
