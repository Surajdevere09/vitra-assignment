const mongoose = require('mongoose');

const topStorySchema = new mongoose.Schema({

  id:{type:mongoose.Schema.Types.ObjectId,ref:"stories",required:true}
})

const TopStory = mongoose.model("topstories",topStorySchema);

module.exports = TopStory