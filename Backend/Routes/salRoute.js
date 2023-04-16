const express = require("express");
const router = express.Router();
const salCntrl = require("../controllers/SalaryController");

//add employees
router.post("/addSal", salCntrl.addSal);

// //all jobs
router.get("/getallsal", salCntrl.getallsal);

// //get one sal 
router.get("/singlesal/:id", salCntrl.singlesal);

// //get one sal 
router.get("/monthsal/:id", salCntrl.monthsal);

// // /edit sals
router.put("/editsal/:id", salCntrl.editsal);
// // /deletesals
router.delete("/deletesal/:id", salCntrl.deletesal);


module.exports = router;
