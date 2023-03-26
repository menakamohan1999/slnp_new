const express = require("express");
const router = express.Router();
const purchaseCntrl = require("../controllers/PurchaseController");

//add employees
router.post("/addPurchase", purchaseCntrl.addPurchase);

// //all jobs
router.get("/getallpurchase", purchaseCntrl.getallpurchase);

// //get one emp 
router.get("/singlepurchase/:id", purchaseCntrl.singlepurchase);
// // /edit emps
router.put("/editpurchase/:id", purchaseCntrl.editpurchase);
// // /deleteemps
router.delete("/deletepurchase/:id", purchaseCntrl.deletepurchase);


module.exports = router;
