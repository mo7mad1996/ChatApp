const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

var me = {};
const users = [];

io.on("connection", socket => {
  io.emit("updateUsers", users);

  socket.on("disconnect", () => {
    me = {};

    users.splice(users.indexOf(me), 1);
    io.emit("updateUsers", users);
  });

  // start
  socket.on("signin", user => {
    me = user;
    users.push(user);
    io.emit("updateUsers", users);
  });

  socket.on("sendMsg", msg => io.emit("sendMsg", msg));

  socket.on("out", user => {
    users.splice(users.indexOf(user), 1);
    io.emit("updateUsers", users);
  });
});

module.exports = {
  app,
  server
};
