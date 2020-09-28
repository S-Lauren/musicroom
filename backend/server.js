const express = require("express")
const app = express();
const path = require("path")
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const file1 = require('./socket')(io)
const cors = require("cors")


const PORT = process.env.PORT || 5000
const router = require("./router")
app.use(cors())
app.use(router)

// serve all from public folder
app.use(express.static(path.join(__dirname, "..", "build")))
app.use(express.static("public"))

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

server.listen(PORT)
