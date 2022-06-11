const mongoose = require('mongoose');

const newStorySchema = new mongoose.Schema({

  id:{type:mongoose.Schema.Types.ObjectId,ref:"stories",required:true}
})

const NewStory = mongoose.model("newstories",newStorySchema);

module.exports = NewStory