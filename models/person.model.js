const mongoose = require('mongoose');
require('dotenv').config();
const PersonSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[ true, "Joke is required and cant be empty"],
        minlength:[10, "Min length is 10 character long"]
      },
      punchline: {
        type: String,
        required:[ true,"Punchline is required!"],
        minlength:[ 3,"Punchline must more than 3 character long"]
      },
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);