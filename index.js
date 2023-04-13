var express = require("express");
var app = express();
const cors = require('cors')

app.use(cors())
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3001);

console.log('Listion port 3001')

io.on("connection", function (socket) {
  console.log('a')
  socket.on("disconnect", function () {
  });
  socket.on("Client-sent-data", function (data) {
    socket.emit("Server-sent-data", data);
  });
});

// create route, display view