
let audiosQueue = []

exports = module.exports = function(io){
io.on('connection', (socket) => {

  socket.on("join", (message)  => {
    socket.emit("message", "welcome")
    socket.broadcast.emit("message", "a new user has joined")
  })

  socket.emit("audiosPlayQueue", audiosQueue)
  socket.on("audiosTrack", (audiosQueue) => {
  audiosQueue.forEach((item, index) => {
      setTimeout(() => {
        io.emit("audiosPlayQueue", item)
      }, (index + 1 )* 8000)
    })
  })

  socket.on("imagesTrack", (imagesQueue) => {
    imagesQueue.forEach((item, index) => {
      setTimeout(() => {
        io.emit("imagesPlayQueue", item)
      }, (index + 1) * 8000)
    })
  })
  socket.on("titlesTrack", (titlesQueue) => {
    titlesQueue.forEach((item, index) => {
      setTimeout(() => {
        io.emit("titlesPlayQueue", item)
      }, (index + 1) * 8000)
    })
  })

  socket.on("sendMessage",( msg) => {
    io.emit( "message", msg)
  })

  socket.on('disconnect', () => {
    io.emit("message", "a user has left ...")
    })
  })
}
