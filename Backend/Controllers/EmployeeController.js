const express = require("express");
const { log } = require("npmlog");
const router = express.Router();
const Employee = require("../Models/EmployeeModel");


const empCntrl = {
  addEmp: async (req, res) => {
    try {
      
      let letters = /^[A-Za-z\s]+$/;
      // let numbers = /^[0-9]+$/;
      let numbers =  /^\d{10}$/;


      const validateEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
     }
 

      const { empId,empName,nic,designation,address,contactNo,email,} = req.body;
      console.log(req.body);
      if(!empId || !empName || !nic || !designation || !address || !contactNo || !email){
        return res.status(200).json({ error: "filled all fields" });
      }
      else if (!empName.match(letters)) {
        return res.status(200).json({ error: "Wrong Name Format, Name only have string!" });

      } else if (!validateEmail(email)) {
        return res.status(200).json({ error: "wrong Email Format" });

      } else if (!contactNo.match(numbers)) {
        return res.status(200).json({ error: "Wrong contactNo Format, contactNo have 10 digits!" });

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
