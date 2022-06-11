const mongoose = require('mongoose');

module.exports =  ()=>{

    return mongoose.connect("mongodb+srv://suraj:suraj123@cluster0.cdyj3.mongodb.net/vitra?retryWrites=true&w=majority")
}