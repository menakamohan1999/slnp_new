const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const dbconnect = require("./config/db");
const empRoute =  require("./Routes/empRoute");
const salRoute =  require("./Routes/salRoute");
const salesRoute =  require("./Routes/salesRoute");
const purchaseRoute =  require("./Routes/purchaseRoute");
const socketio = require('socket.io');
const server = require('http').Server(app);
const io = socketio(server);


// var io = require("socket.io")(app);
// global.io = io;

const mqttConnect  =  require("./MqttConn");

//middleware
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());


//call database
dbconnect();

//home api
app.get("/", (req, res) => {
  res.send("ok");
  console.log(req);
});

//Routes
app.use("/api", empRoute);
app.use("/api", salRoute);
app.use("/api", salesRoute);
app.use("/api", purchaseRoute);

mqttConnect();

//PORT
const PORT = 8000 || process.env.PORT 
app.listen(PORT, () => {
  console.log(`server has been started ${PORT}`);

});

//Socket.IO
io.on('connection', (socket) => {
  console.log(`Socket ${s} connected`);

  socket.on('sendMessage',(message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', ()=>{
    console.log(`Socket ${socket.id} disconnected`);
  });
});


