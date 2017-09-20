# pict-cook-share

Pict Cook n Share. There is an app using opensource API . Collaborate for team work week 1

## Build with:
* [Mongoose](https://www.postgresql.org/download/) - Database
* [Express](https://expressjs.com/) - Enpoint Setup
* [Google Vision](https://cloud.google.com/vision/) - Picture Detections
* [Food2Fork](http://food2fork.com/default#) - Database Recipe

Route | HTTP | Description
------------ | ------------- | -------------
/signup | POST | Sign up 
/signin | POST | Sign in 
/recipe | GET,POST | Get all recipe as homepage, upload , all recipe and detail recipe
/user | GET | All User

## Run this API
Clone the repository and u should install the package who's declare on this file. You just doing :
```
npm install
npm run dev
```

Running the application in your browser with :
> localhost:3000/recipe