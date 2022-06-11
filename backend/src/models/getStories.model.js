const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({

    by:{ type:String,required:true},
    descendants: { type:Number,required:true,unique:true},
    id: { type:Number,required:true,unique:true},
    score: { type:Number,required:true},
    time: { type:Date, default:Date.now()},
    title: "Python Developers Survey 2020 Results",
    type: "story",
    url: 
})