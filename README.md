# NoteApp [![Build Status](https://travis-ci.com/ticklepoke/resync-todo-list.svg?branch=master)](https://travis-ci.com/ticklepoke/resync-todo-list)

## Demo

Demo can be viewed [here](https://ticklepoke.github.io/resync-todo-list/resync-todo-list/). This is an Angular implementation of a CRUD todo list.

## Linting

Pre-commit linting is done using Angular's built in linting and enforced by [husky](https://www.npmjs.com/package/husky) hooks.

## UI

UI is built using [Material Angular](https://material.angular.io/).

## Backend

A [dummy backend Todo API](https://fakerestapi.azurewebsites.net/) is used to simulate API responses for CRUD operations.

Note: POST / PUT / CRUD operations do not persist when navigating between pages due to the dummy backend.

## Todo

- Unit tests
- Code coverage

## Angular Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
