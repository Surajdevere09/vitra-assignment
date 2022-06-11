const express = require('express');
const BestStory = require("../models/myBestStories.model")
const router = express.Router();


router.get("", async (req, res) => {

    try {
const bestStories = await BestStory.find().lean().exec();

let arr =[];
for(let i = 0; i < bestStories.length; i++) {
    arr.push(bestStories[i].id)
}
console.log('bestStories:', bestStories)

res.status(200).send(arr)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})

router.post("", async (req, res) => {

    try {
const bestStory = await BestStory.create(req.body)

res.status(201).send(bestStory)
        
    } catch (e) {
        console.log('e:', e.message);
        res.status(500).send(e.message);
    }
})


module.exports = router