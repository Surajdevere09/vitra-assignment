const express = require('express');
const Story = require("../models/getStories.model")
const router = express.Router();


router.get("", async (req, res) => {

    try {
const stories = await Story.find().lean().exec();

res.status(200).send(stories)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})

router.post("", async (req, res) => {

    try {
const story = await Story.create(req.body)

res.status(201).send(story)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})


module.exports = router