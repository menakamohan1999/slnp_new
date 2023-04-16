// const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");

// const employeeSchema = new mongoose.Schema(
//   {
//     empId: {
//       type: String,
//       required: true,
//     },
//     empName: {
//       type: String,
//       required: true,
//     },
//     nic: {
//       type: String,
//       required: true,
//     },
//     designation: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     contactNo: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const salarySchema = new mongoose.Schema(
//   {
//     month: {
//       type: String,
//       required: true,
//     },
//     employee: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Employee",
//       required: true,
//     },
//     basicSalary: {
//       type: Number,
//       required: true,
//     },
//     brAllowance1: {
//       type: Number,
//       required: true,
//     },
//     brAllowance2: {
//       type: Number,
//       required: true,
//     },
//     brAllowance3: {
//       type: Number,
//       required: true,
//     },
//     holNoOfDays: {
//       type: Number,
//       required: true,
//     },
//     noPayNoOfDays: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Employee = mongoose.model("Employee", employeeSchema);
// const Salary = mongoose.model("Salary", salarySchema);

// module.exports = {
//   Employee,
//   Salary,
// };


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
