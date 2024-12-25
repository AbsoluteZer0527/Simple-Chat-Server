const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  //...
  console.log(socket.id + " connected!");

  socket.on('message', (message) => {
    console.log(`${socket.id}: ${message}`)

    //broadcast to all users
    socket.broadcast.emit(
        'message', 
        JSON.stringify({
                user: socket.id,
            message: message, 
        })
    );
  })
});

httpServer.listen(4000, () => {
  console.log("Server is running on port 4000");
});
