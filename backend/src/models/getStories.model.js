const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({

    by:{ type:String,required:true},
    descendants: { type:Number,required:true,unique:true},
    id: { type:Number,required:true,unique:true},
    score: { type:Number,required:true},
    time: { type:Date, default:Date.now()},
    title:{ type:String,required:true},
    type: { type:String,required:true},
    url: { type:String,required:true},
    image:{ type:String,required:true},
},
{
    timestamps: true,
    versionKey:false,
})

const Story = mongoose.model("stories",storySchema);

module.exports = Story