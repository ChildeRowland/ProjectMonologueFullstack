# Project Monologue

Actors' resource for finding monologues.  Filter the database by multiple properties, select one to view in a modal.

Anyone can search.  When users log in, they can add new monlogues and save monologues to a list of favorites.  

Curators view recent additons for accuracy and consistency.

Built using the MEAN stack and deployed via heroku:

https://cm-project-monologue.herokuapp.com


## Scafolding

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.2.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
