const mongoose = require('mongoose');

const bestStorySchema = new mongoose.Schema({

  id:{type:mongoose.Schema.Types.ObjectId,ref:"stories",required:true}
})

const BestStory = mongoose.model("beststories",bestStorySchema);

module.exports = BestStory