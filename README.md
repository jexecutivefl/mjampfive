# Mjampfive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Invoke Lamda Function

    amplify function invoke amponebd5d4899

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add Amplify

    npm install aws-amplify aws-amplify-angular
    
## Add this to polyfill.ts for Angular 6-8 support
    
    (window as any).global = window;
    (window as any).process = {
      env: { DEBUG: undefined },
    };
    
## Add this to index.html

    <script>
        if(global === undefined) {
            var global = window;
        }
    </script>
    
## Setup Amplify

    amplify init
    amplify add auth
    amplify push

## add to tsconfig.app.json

    "compilerOptions": {
       "types" : ["node"]
    } 

## Add Amplify to main.ts

    import Amplify from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
    
## Add Amplify to app module

    import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
    
    @NgModule({
      ...
      imports: [
        ...
        AmplifyAngularModule
      ],
      ...
      providers: [
        ...
        AmplifyService
      ]
      ...
    });

## Add MDBootstrap

    npm install angular-bootstrap-md --save
    
Add this to app.module.ts
    
    import { NgModule } from '@angular/core';
    import { MDBBootstrapModule } from 'angular-bootstrap-md';
    @NgModule({
        imports: [
            MDBBootstrapModule.forRoot()
        ]
    });
    
Add this to the angular.json file

    "styles": [
        "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
        "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
        "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
        "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
        "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
        "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
        "node_modules/animate.css/animate.css",
        "src/styles.scss"
    ],
    "scripts": [
      "node_modules/chart.js/dist/Chart.js",
      "node_modules/hammerjs/hammer.min.js"
    ],
    
Install dependencies 

    npm install -–save chart.js@2.5.0 @types/chart.js @types/chart.js @fortawesome/fontawesome-free hammerjs animate.css
   
## Add Auth
    amplify add auth
    
## Add Auth guard
    ng g guard auth
## Add Routes    

## Roll babel back to avoid error from 8.1 update

    npm i @babel/compat-data@7.8.0 

## If needed change this line in tsconfig.json

    "angularCompilerOptions": {
    "fullTemplateTypeCheck": false,
    "strictInjectionParameters": true
    }
