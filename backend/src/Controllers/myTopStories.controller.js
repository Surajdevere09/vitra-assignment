const express = require('express');
const TopStory = require("../models/myTopStories.model")
const router = express.Router();


router.get("", async (req, res) => {

    try {
const topStories = await TopStory.find().lean().exec();

res.status(200).send(topStories)
        
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