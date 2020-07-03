const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const userSchema = new Schema({
  socialId: String,
  socialName: String,
  socialLastName: String,
  social: String,
  createdLevels: {type: Number, default: 0},
  completedLevels: Number,
  character: String,
  achievements: Array
})

mongoose.model('users', userSchema)