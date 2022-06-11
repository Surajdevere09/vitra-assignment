const express = require('express');
const connect = require("./src/Configs/db")
const storyController = require("./src/Controllers/getStories.controller");
const topStoryController = require("./src/Controllers/myTopStories.controller");
const newStoryController = require("./src/Controllers/myNewStories.controller");
const bestStoryController = require("./src/Controllers/myBestStories.controller");
const cors =require("cors")





const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())
app.use(express.json())
app.use("/stories", storyController);
app.use("/topstories", topStoryController);
app.use("/newstories",newStoryController);
app.use("/beststories",bestStoryController);
app.get("/", (req, res) => {

    res.send("Welcome to vitra News")
})


app.listen(PORT,async (req, res) => {

    try {
        await connect(req, res);
        console.log("Connected to port 3001")
    } catch (e) {
        console.log('e:', e.message)
    }
})