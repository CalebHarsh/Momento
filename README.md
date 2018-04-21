# Momento

<!-- Header Image -->
<!-- ![header](./src/assets/readme-header.png) -->

Momento is a micro social network that allows users to upload pictures to online albums. Unlike Facebook or Instagram, Momento allows multiple users to contribute to the same album making it perfect for weddings, family outings or
Just sharing memories in the moment. 

- - - -

## What is the Purpose of This App?

We wanted to create an application for anyone that has ever taken a picture and had a friend or loved one tap them them on the shoulder and say “Hey, send that to me!”
Having to send pictures out via text message every time you take a picture is annoying and outdated. THERE HAS TO BE A BETTER WAY! 

## The App in Action

We have built a simple account creation tool that stores the user's name, email,
zip code, and a password that is validated and encrypted.

![sign up gif](./src/assets/sign-up.gif)  

The only input required by the user is their zip code.

![search gif](./src/assets/search.gif)

The list of government officials are the user's representatives for their area.
Clicking on an official displays more information about them on the right.

![select gif](./src/assets/select.gif)

## Tools Used

Front-End Tools: 
* [Adobe XD](https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=search&s_kwcid=AL!3085!3!247395684636!e!!g!!adobe%20xd&ef_id=WdHfMQAAAF_wo3l0:20180421044352:s): used for wireframing and mockups
* [React](https://vuejs.org/v2/guide/): framework for building out the app
* [Ant Design](http://lostgrid.org/): A component library designed and maintained by Ant Financial

Back-End Tools:
* [Node.js](https://nodejs.org/en/): used for server-side scripting
* [Express](https://expressjs.com/): used as our server
* [MySQL](https://www.mysql.com/): used as our database
* [Sequelize](http://docs.sequelizejs.com/): used as our ORM
* [Jest](https://facebook.github.io/jest/): used for testing
* [Google Civic Information API](https://developers.google.com/civic-information/): API used for government official data

## Deployed Version

You can view a [deployed version here](https://politivue.herokuapp.com/)


## Installing

You can run this app locally by following these steps:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3030
npm run dev

# build for production with minification
npm run production
```