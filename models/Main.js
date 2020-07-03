const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MainSchema = new Schema({
    id: String,
    title: String,
    text: String
});

mongoose.model('main', MainSchema)