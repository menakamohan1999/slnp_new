const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const dbconnect = require("./config/db");
const empRoute =  require("./Routes/empRoute");
const salRoute =  require("./Routes/salRoute");


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


//PORT
const PORT = 8000 || process.env.PORT 
app.listen(PORT, () => {
  console.log(`server has been started ${PORT}`);
});


