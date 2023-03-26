const express = require("express");
const { log } = require("npmlog");
const router = express.Router();
const Purchase = require("../Models/PurchaseModel");


const purchaseCntrl = {
  addPurchase: async (req, res) => {
    try {
      
     

      const { date,p92Qty,p92Price,p95Qty,p95Price,ladQty,ladPrice,lsdQty,lsdPrice,kerQty,kerPrice,} = req.body;
      console.log(req.body);
      if(!date || !p92Qty || !p92Price || !p95Qty || !p95Price || !ladQty || !ladPrice || !lsdQty || !lsdPrice || !kerQty || !kerPrice){
        return res.status(200).json({ error: "filled all fields" });
      }
      
      const purchase = new Purchase({
        date,
        p92Qty,
        p92Price,
        p95Qty,
        p95Price,
        ladQty,
        ladPrice,
        lsdQty,
        lsdPrice,
        kerQty,
        kerPrice


      })
      await purchase.save();
       return  res.status(200).json({ msg: "sales Posted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },


  getallpurchase: async (req, res) => {
    try {
      const purchase = await Purchase.find();
      res.send(purchase);
      console.log(purchase);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },


singlepurchase: async(req,res)=>{
  try {
    const postId =  req.params.id ; 
  const post  = await Purchase.findById(postId)
  res.send(post);
  } catch (error) {
    res.status(400).json({ error: "error" });
  
  }
} ,





editpurchase: async (req, res) => {
  try {
    
    const updatepurchase = await Purchase.findByIdAndUpdate(
      
      {
        _id:  req.params.id
      },
      {
        date: req.body.date,
        p92Qty: req.body.p92Qty,
        p92Price: req.body.p92Price,
        p95Qty: req.body.p95Qty,
        p95Price: req.body.p95Price,
        ladQty: req.body.ladQty,
        ladPrice: req.body.ladPrice,
        lsdQty: req.body.ladQty,
        lsdPrice: req.body.ladPrice,
        kerQty: req.body.kerQty,
        kerPrice: req.body.kerPrice,
        
      },
      {
        new: true,
      }
    );
    res.send(updatepurchase);
    console.log(updatepurchase);
  } catch (error) {
    res.status(400).json({ error });
  }
},




deletepurchase: async (req, res) => {
  try {
    await Purchase.findByIdAndDelete(req.params.id);
    return res.status(400).json({ msg: "deleted successfully " });
  } catch (error) {
    res.status(400).json(error);
  }
},

}



module.exports = purchaseCntrl;
