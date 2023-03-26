const express = require("express");
const { log } = require("npmlog");
const router = express.Router();
const Sales = require("../Models/SalesModel");


const salesCntrl = {
  addSales: async (req, res) => {
    try {
      
     

      const { date,p92Qty,p92Price,p95Qty,p95Price,ladQty,ladPrice,lsdQty,lsdPrice,kerQty,kerPrice,} = req.body;
      console.log(req.body);
      if(!date || !p92Qty || !p92Price || !p95Qty || !p95Price || !ladQty || !ladPrice || !lsdQty || !lsdPrice || !kerQty || !kerPrice){
        return res.status(200).json({ error: "filled all fields" });
      }
      
      const sales = new Sales({
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
      await sales.save();
       return  res.status(200).json({ msg: "sales Posted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },


  getallsales: async (req, res) => {
    try {
      const sales = await Sales.find();
      res.send(sales);
      console.log(sales);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },


singlesales: async(req,res)=>{
  try {
    const postId =  req.params.id ; 
  const post  = await Sales.findById(postId)
  res.send(post);
  } catch (error) {
    res.status(400).json({ error: "error" });
  
  }
} ,





editsales: async (req, res) => {
  try {
    
    const updatesales = await Sales.findByIdAndUpdate(
      
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
    res.send(updatesales);
    console.log(updatesales);
  } catch (error) {
    res.status(400).json({ error });
  }
},




deletesales: async (req, res) => {
  try {
    await Sales.findByIdAndDelete(req.params.id);
    return res.status(400).json({ msg: "deleted successfully " });
  } catch (error) {
    res.status(400).json(error);
  }
},

}



module.exports = salesCntrl;
