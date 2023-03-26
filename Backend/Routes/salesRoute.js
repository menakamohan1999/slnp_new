const express = require("express");
const router = express.Router();
const salesCntrl = require("../controllers/SalesController");

//add employees
router.post("/addSales", salesCntrl.addSales);

// //all jobs
router.get("/getallsales", salesCntrl.getallsales);

// //get one emp 
router.get("/singlesales/:id", salesCntrl.singlesales);
// // /edit emps
router.put("/editsales/:id", salesCntrl.editsales);
// // /deleteemps
router.delete("/deletesales/:id", salesCntrl.deletesales);


module.exports = router;
