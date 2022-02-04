const express = require("express");
const socket = require("socket.io");

const app = express();
app.use(express.static("public"));
const sever = app.listen(process.env.PORT || 3000, () =>
  console.log("Listing to port 3000")
);



const io = socket(sever);

io.on("connect",(socket)=>{
    console.log("connected");

    socket.on("message",(data)=>{
        io.sockets.emit("message",data);
    })
})