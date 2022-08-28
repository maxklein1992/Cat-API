<h1 align="center">Cat API</h1>

This app makes use of the [Cat API](https://thecatapi.com/). This is a web api with a database that you can freely use with information about cat breeds and access to thousands of cat images. The API can also be used to upload new images, tag your favorites and much more functionalities. The [documentation](https://docs.thecatapi.com/) of the Cat API is also available on the internet.

## The Basics

You can use the API without using any code by pasting the following URL in your address bar.

```
https://api.thecatapi.com/v1/images/search
```

The Cat API returns a JSON string with the information of one random entry in their cat image database. For example the JSON string can be:

```
[{"id":"Y987fJ8ZD","url":"https://cdn2.thecatapi.com/images/Y987fJ8ZD.jpg","width":474,"height":632}]
```

In order to view the image, you need to copy the URL part of the string and paste it in your address bar.

![image](https://user-images.githubusercontent.com/19752148/186999757-ed258842-f8ed-46a5-9e21-1018c1a71367.png)

You can also make your request more specific by putting a `?` to the end of URL with one or more parameters. For example to return a Russian Blue (rblu) cat:

```
https://api.thecatapi.com/v1/images/search?breed_ids=rblu
```

## About this project

In this project we use the Cat Api in multiple ways:

- To get a random image of a cat.

```
https://api.thecatapi.com/v1/images/search
```

- To get all breed names

```
https://api.thecatapi.com/v1/breeds
```

- To search on breed names and get access to different kind of information about a breed.

```
https://api.thecatapi.com/v1/breeds/search?q={breedName}
```

- To create favorite breeds.

```
https://api.thecatapi.com/v1/favourites
```

Passing

```
{
    "image_id":"id of the image",
    "sub_id":"optional unique id of your user"
}
```

- To get all favorite breeds.

```
https://api.thecatapi.com/v1/favourites
```

- To remove a breed from the favorite list.

```
https://api.thecatapi.com/v1/favourites/${favouriteId}
```

```
https://api.thecatapi.com/v1/favourites/${favouriteId}
```

## Getting started

### Prerequisites

- Install [Node.js](https://nodejs.org/en/) which includes [Node Package Manager](https://www.npmjs.com/get-npm).

- Install the Angular CLI globally:

```
$ npm install -g @angular/cli
```

### Clone the project

Open a terminal and run the following git command:

```
$ git clone https://github.com/maxklein1992/Cat-API.git
```

### Install project dependencies

Install the projects dependencies by running in the root of the project

```
$ npm install
```

Run `ng build` to build the project.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests.

## Stack

The stack of this app is as follows:

- **Angular.js** - Structural framework for dynamic web applications.
- **Typescript** - Superset of JavaScript which provides optional static typing, classes and interfaces.
- **Jest** - Javascript testing framework
- **React Testing Library** - React DOM testing utilities that encourage good testing practices.
- **TypeDoc** - A documentation generator for Typescript projects.
- **Ngx Translate** - The internationalization (i18n) library for Angular projects.

## Any Questions:

- **Email**: mcklein1992@gmail.com
