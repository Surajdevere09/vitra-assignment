const express = require('express');
const TopStory = require("../models/myTopStories.model")
const router = express.Router();


router.get("", async (req, res) => {
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    try {
const topStories = await TopStory.find().skip((page-1)*size).limit(size).lean().exec();

let arr =[];
for(let i = 0; i < topStories.length; i++) {
    arr.push(topStories[i].id)
}
console.log('topStories:', topStories)

res.status(200).send(arr)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})

router.post("", async (req, res) => {

    try {
const topStory = await TopStory.create(req.body)

res.status(201).send(topStory)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})


module.exports = router