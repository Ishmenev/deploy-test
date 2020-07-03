const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LevelSchema = new Schema({
    title:  {
        type: String
    },
    id:  {
        type: String
    },
    width:  {
        type: String
    },
    height:  {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    type: {
        type: String
    },
    player: {
        type: Object
    },
    level: {
        type: Array
    }
});

module.exports = Login = mongoose.model('level', LevelSchema)