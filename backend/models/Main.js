const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MainSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    }
});

module.exports = Main = mongoose.model('main', MainSchema)