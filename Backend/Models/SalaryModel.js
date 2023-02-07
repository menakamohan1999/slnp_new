const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const salaryschema = new mongoose.Schema(
  {
    // month: {
    //   type: Date,
    //   required: true,
    // },
        month: {
      type: String,
      required: true,
    },
    empId: {
      type: String,
      required: true,
    },
    empName: {
        type: String,
        required: true,
      },
    designation: {
        type: String,
        required: true,
      },
    basicSalary: {
      type: Number,
      required: true,
    },
    brAllowance1: {
        type: Number,
        required: true,
      },
    brAllowance2: {
      type: Number,
      required: true,
    },
    brAllowance3: {
      type: Number,
      required: true,
    },
    
    holNoOfDays: {
      type: Number,
      required: true,
    },
    // holPayment: {
    //   type: Number,
    //   default: function() {
    //     return ((this.basicSalary /30.5)* this.holNoOfDays)
    //   // required: true,
    // },
    noPayNoOfDays: {
      type: Number,
      required: true,
    },
    // noPayPayment: {
    //   type: Decimal128,
    //   // required: true,
    // },
    // totalEarning: {
    //   type: Decimal128,
    //   // required: true,
    // },
    // epf: {
    //   type: Decimal128,
    //   // required: true,
    // },
    // netSalary: {
    //   type: Decimal128,
    //   // required: true,
    // },

  },

  {
    timestamps: true,
  }
);

const salaryModel = new mongoose.model("Salary", salaryschema);
module.exports = salaryModel;
