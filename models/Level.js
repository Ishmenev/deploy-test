const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LevelSchema = new Schema({
    title: String,
    id: String,
    width: String,
    height: String,
    description: String,
    image: String,
    type: String,
    player: Object,
    level: Array
});

mongoose.model('level', LevelSchema)