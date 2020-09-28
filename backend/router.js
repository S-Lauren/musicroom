const express = require("express")
const router = express.Router()
const stream = require('youtube-audio-stream');

router.get('/', (req, res) => {
  res.send("Server is up and running")
})


router.get("/audio/:id", (req, res) => {
const uri = "https://www.youtube.com/watch?v=" +req.params.id

  try { 
  
    res.setHeader("Content-Type", "text/html");
    stream(uri).pipe(res) 

  } catch(exception) {
    res.status(500).send(exception)
  }
})
module.exports = router; 