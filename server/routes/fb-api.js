const express = require('express')
const router =  express.Router()
// require('dotenv').config()
const FB = require('fb'),
      fb = new FB.Facebook({version: 'v2.10'})

// FB.options({version: 'v2.4'});
// var Shyf = FB.extend({appId: process.env.APP_ID, appSecret: process.env.APP_SCRT})

// var setAccessToken = (req, res, next) => {
//   console.log(req.headers.fbaccesstoken,'=====');
//   FB.setAccessToken(req.headers.fbaccesstoken);
//   next()
// }


FB.setAccessToken('EAAUJyqSB6f4BAL98GaNOF1qyIeWdhdA8OyGXkWZACaSy4xKuVUJMwnhHvOWGWOlMdYOn4bi16DGR0ZCHGAnAzCysZCFxR5bDKxcyxrJJaRT1onN5fnvFk8mxLfvxj6RCllDZCwD1nhq3pOT5n7QcYmKrLyHUDXNKz2OZCG5iCZAbOg3kAa5VTVtoaPuPa0wTngAITOdCxifgZDZD');
router.post('/postfb', (req, res) => {
  FB.api('me/feed', 'post', {
    message:req.body.message
  }, (err,result) => {
    if (err) {
      res.send(err)
    } console.log('this is result post: ', result);
    res.send(result)
  })
})

module.exports = router
