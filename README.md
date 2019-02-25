# Search App 

This is an application using the FourSquare API which uses the search endpoint. I did look into using the recommendation endpoint but last year the check in and ratings have been dropped to simplify the api - https://developer.foursquare.com/docs/announcements#start-up-tier-launch

### Tech

Search App uses a number of open source projects to work:

* [React] -JavaScript library 
* [Axios] - promise based HTTP client for the browser 
* [SCSS] - CSS preprocessor
* [WebPack] - module bundler
* [Babel] - JavaScript compiler

### Running the project

To get this project started you will need to clone the repo and run 

```sh
$ npm install
$ npm run build
$ npm start
```

This should open the application in your browser where you will have to allow for your location to be used. Then you can search for local places by place or theme.

### Improvements

- Maybe move the styling into the react components itself
- Bring in some unit testing in - Jest 
- Submit the users input by pressing enter as well as submit
