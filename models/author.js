const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//id is not required mongoDB is going to craete one for us
const authorSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model('Author', authorSchema);