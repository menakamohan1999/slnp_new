const express = require("express");
const router = express.Router();
const empCntrl = require("../controllers/EmployeeController");

//add employees
router.post("/addEmp", empCntrl.addEmp);

// //all jobs
router.get("/getallemp", empCntrl.getallemp);

// //get one emp 
router.get("/singleemp/:id", empCntrl.singleemp);
// // /edit emps
router.put("/editemployee/:id", empCntrl.editemployee);
// // /deleteemps
router.delete("/deleteemp/:id", empCntrl.deleteemp);


module.exports = router;
