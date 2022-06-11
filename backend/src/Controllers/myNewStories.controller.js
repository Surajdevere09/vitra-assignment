const express = require('express');
const NewStory = require("../models/myNewStories.model")
const router = express.Router();


router.get("", async (req, res) => {

    try {
const myNewStories = await NewStory.find().lean().exec();

let arr =[];
for(let i = 0; i < myNewStories.length; i++) {
    arr.push(myNewStories[i].id)
}


res.status(200).send(arr)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})

router.post("", async (req, res) => {

    try {
const topStory = await NewStory.create(req.body)

res.status(201).send(topStory)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})


module.exports = router