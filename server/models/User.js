const mongoose   = require('mongoose')
// const Schema = mongoose.Schema

// var schemaUser = new Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   email: String
// })

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email:String
})

const User = mongoose.connect('User', userSchema)

module.exports = User
