const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const salesschema = new mongoose.Schema(
  {
    date: {
        type: String,
        required: true,
      },
    p92Qty: {
        type: Number,
        required: true,
      },
    p92Price: {
        type: Number,
        required: true,
      },
    p95Qty: {
        type: Number,
        required: true,
      },
    p95Price: {
        type: Number,
        required: true,
      },
    ladQty: {
        type: Number,
        required: true,
      },
    ladPrice: {
        type: Number,
        required: true,
      },
    lsdQty: {
        type: Number,
        required: true,
      },
    lsdPrice: {
        type: Number,
        required: true,
      },
    kerQty: {
        type: Number,
        required: true,
      },
    kerPrice: {
        type: Number,
        required: true,
      },

  },

  {
    timestamps: true,
  }
);

const salesModel = new mongoose.model("Sales", salesschema);
module.exports = salesModel;
