const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
const port = process.env.PORT || 3000
const app = express()
const sign = require('./routes/sign')
const user = require('./routes/user')
const fbApi = require('./routes/fb-api')

mongoose.connect('mongodb://localhost/Shyf-App', (err) => {
  if(err) console.log(err);
  console.log("///////connect to mongodb////////");
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// app.use('/signup', signUp)
// app.use('/signin', signIn)
app.use('/', sign)
app.use('/user', user)
app.use('/api', fbApi)

app.listen(port);
console.log('Your app is running on http://localhost:' + port);
