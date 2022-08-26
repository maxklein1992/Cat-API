# CatApp

This app makes use of the [Cat API](https://thecatapi.com/). This is a web api with a database that you can freely use with information about cat breeds and access to thousands of cat images. The API can also be used to upload new images, tag your favorites and much more functionalities.

# The Basics

You can use the API without code by pasting the following URL in your address bar.

````
https://api.thecatapi.com/v1/images/search
````

The Cat API returns a JSON string with the information of one random entry in their cat image database. For example the JSON string can be:

````
[{"id":"Y987fJ8ZD","url":"https://cdn2.thecatapi.com/images/Y987fJ8ZD.jpg","width":474,"height":632}]
````
In order to view the image, you need to copy the URL part of the string and paste it in your address bar. You can also make your request more specific by putting a ? to the end of URL with one or more parameters. For example to return a Russian Blue (rblu) cat:

````
https://api.thecatapi.com/v1/images/search?breed_ids=rblu
````


## Stack

- **Angular.js** - Structural framework for dynamic web applications.
- **Typescript** - Superset of JavaScript which provides optional static typing, classes and interfaces.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
