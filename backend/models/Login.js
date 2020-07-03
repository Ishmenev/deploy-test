const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LoginSchema = new Schema({
    userId:  {
        type: String
    },
    firstName: {
        type: String
    },
    secondName: {
        type: String
    },
});

module.exports = Login = mongoose.model('user', LoginSchema)