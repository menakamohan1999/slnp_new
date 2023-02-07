const express = require("express");
const { log } = require("npmlog");
const router = express.Router();
const Employee = require("../Models/EmployeeModel");


const empCntrl = {
  addEmp: async (req, res) => {
    try {
      
      const { empId,empName,nic,designation,address,contactNo,email,} = req.body;
      console.log(req.body);
      if(!empId || !empName || !nic || !designation || !address || !contactNo || !email){
        return res.status(200).json({ error: "filled all fields" });
      }
      const emp = new Employee({
        empId,
        empName,
        nic,
        designation,
        address,
        contactNo,
        email

      })
      await emp.save();
       return  res.status(200).json({ msg: "emp Posted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },


  getallemp: async (req, res) => {
    try {
      const emp = await Employee.find();
      res.send(emp);
      console.log(emp);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },


singleemp: async(req,res)=>{
  try {
    const postId =  req.params.id ; 
  const post  = await Employee.findById(postId)
  res.send(post);
  } catch (error) {
    res.status(400).json({ error: "error" });
  
  }
} ,





editemployee: async (req, res) => {
  try {
    
    const updateemployee = await Employee.findByIdAndUpdate(
      
      {
        _id:  req.params.id
      },
      {
        empId: req.body.empId,
        empName: req.body.empName,
        nic: req.body.nic,
        designation: req.body.designation,
        address: req.body.address,
        contactNo: req.body.contactNo,
        email: req.body.email,
        
      },
      {
        new: true,
      }
    );
    res.send(updateemployee);
    console.log(updateemployee);
  } catch (error) {
    res.status(400).json({ error });
  }
},




deleteemp: async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    return res.status(400).json({ msg: "deleted successfully " });
  } catch (error) {
    res.status(400).json(error);
  }
},

}



module.exports = empCntrl;
