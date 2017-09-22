const express    = require('express'),
      morgan     = require('morgan'),
      bodyParser = require('body-parser'),
<<<<<<< HEAD
      cors       = require('cors'),
      mongoose   = require('mongoose');
const port       = process.env.PORT || 3000
const app        = express()
const user       = require('./routes/user')

=======
      cors = require('cors'),
      mongoose = require('mongoose');
const port = process.env.PORT || 3000
// const user = require('./routes/user')
const vision = require('./routes/vision')
const app = express()

var url = 'mongodb://localhost/recipe';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
   console.log(`You're connected in this database`)
});
>>>>>>> 26d901a1e8533f34195cd15ae5a6aef3e06c5dc6

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
// const mongoose   = require('mongoose');

// var url = 'mongodb://anggraito:<PASSWORD>@mydb-shard-00-00-vv98n.mongodb.net:27017,mydb-shard-00-01-vv98n.mongodb.net:27017,mydb-shard-00-02-vv98n.mongodb.net:27017/recipe?ssl=true&replicaSet=mydb-shard-0&authSource=admin';
mongoose.connect('mongodb://localhost/Shyf', (err) => {
  if (err) console.log(err);
    console.log('//////connect to MongoDB////////');

});


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//    console.log(`You're connected in this database`)
// });


// app.use('/', user)
app.use('/vision', vision)

app.listen(port);
console.log('Your app is running on http://localhost:' + port);
