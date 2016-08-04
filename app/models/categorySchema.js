var mongoose = require("mongoose");

module.exports = new mongoose.Schema("Category", {
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});
