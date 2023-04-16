const express = require("express");
const { log } = require("npmlog");
const router = express.Router();
const Salary = require("../Models/SalaryModel");


const salCntrl = {
  addSal: async (req, res) => {
    try {
      
      const { month,empId,empName,designation,basicSalary,brAllowance1,brAllowance2,brAllowance3,holNoOfDays,noPayNoOfDays,} = req.body;
      console.log(req.body);
      if(!month || !empId || !empName || !designation || !basicSalary || !brAllowance1|| !brAllowance2|| !brAllowance3 || !holNoOfDays || !noPayNoOfDays){
        return res.status(200).json({ error: "filled all fields" });
      }
      const sal = new Salary({
        month,
        empId,
        empName,
        designation,
        basicSalary,
        brAllowance1,
        brAllowance2,
        brAllowance3,
        holNoOfDays,
        // holPayment,
        noPayNoOfDays
        // noPayPayment,
        // totalEarning,
        // epf,
        // netSalary

      })
      await sal.save();
       return  res.status(200).json({ msg: "salary Posted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },


  getallsal: async (req, res) => {
    try {
      const sal = await Salary.find();
      res.send(sal);
      console.log(sal);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },


singlesal: async(req,res)=>{
  try {
    const postId =  req.params.id ; 
  const post  = await Salary.findById(postId)
  res.send(post);
  } catch (error) {
    res.status(400).json({ error: "error" });
  
  }
} ,


monthsal: async(req,res)=>{
  try {
    const salmonth =  req.params.month ; 
  const sal  = await Salary.findById(salmonth)
  res.send(sal);
  } catch (error) {
    res.status(400).json({ error: "error" });
  
  }
} ,





editsal: async (req, res) => {
  try {
    
    const updatesalary = await Salary.findByIdAndUpdate(
      
      {
        _id:  req.params.id
      },
      {
        month:req.body.month,
        empId: req.body.empId,
        empName: req.body.empName,
        designation: req.body.designation,
        basicSalary: req.body.basicSalary,
        brAllowance1: req.body.brAllowance1,
        brAllowance2: req.body.brAllowance2,
        brAllowance3: req.body.brAllowance3,
        holNoOfDays: req.body.holNoOfDays,
        noPayNoOfDays: req.body.noPayNoOfDays,
      },
      {
        new: true,
      }
    );
    res.send(updatesalary);
    console.log(updatesalary);
  } catch (error) {
    res.status(400).json({ error });
  }
},


deletesal: async (req, res) => {
  try {
    await Salary.findByIdAndDelete(req.params.id);
    return res.status(400).json({ msg: "deleted successfully " });
  } catch (error) {
    res.status(400).json(error);
  }
},
}



module.exports = salCntrl;
