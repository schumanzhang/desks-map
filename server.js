const io = require('socket.io')()

io.on('connection', (client)=> {
  client.on('deskBookingChanged', () => {
    console.log("deskBookingChanged")
    io.emit("mapChanged")
  })
})

const port = 8000
io.listen(port)
console.log("listening to port ", port)