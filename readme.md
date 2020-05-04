# Assignment #6 - Angular

## Intro:
This is a front-end Angular page that interacts with node server from my [Assignment 5 project](https://github.com/HarvardDCENode/assignment-5-yangzhou93)

## How to use:

1. Download this git repo and cd into photoApp directory and run
```
npm install
```
2. After all the dependencies are installed, run
```
npm start
```
3. run ``` npm audit fix ``` to fix any vulnerabilities

3. Go to [localhost:4200](http://localhost:4200/)

## Functionality:

1. CRUD operations are implemented:
 + Home pages Read all the photos from server
 + User can Create new photo by utilizing the Photo Upload box on the top of the home page
 + Updating photo function can be found by clicking into each individual photo
 + User can delete each photo by hitting the delete button

2. Messages component on the top of the home page provides feedback to users

3. Validation is applied to photo uploading and editing forms

4. AppRoutingModule is used to navigate between components
