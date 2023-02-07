const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const employeeschema = new mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
    },
    empName: {
        type: String,
        required: true,
      },
      nic: {
        type: String,
        required: true,
      },
    designation: {
        type: String,
        required: true,
      },
    address: {
      type: String,
      required: true,
    },
    contactNo: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },

  },

  {
    timestamps: true,
  }
);

const employeeModel = new mongoose.model("Employee", employeeschema);
module.exports = employeeModel;
