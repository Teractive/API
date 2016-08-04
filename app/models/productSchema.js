var mongoose = require ("mongoose");
//var Category = require ("./categorySchema");

module.exports = new mongoose.Schema("Product", {
  user:{
    type: String,
    required: true
  },
  name:{
    type: String
  },
  category:{
    type: Schema.types.ObjectId, ref: "Category"
  },
  price:{
    type: Number
  },
  description:{
    type: String,
    default: ""
  },
  delivery:{
    type: Boolean,
    default: false
  },
  exchange:{
    type: Boolean,
    default: false
  },
  condition:{
    type: Number,
    default: 1
  },
  status:{
    type: Number
  },
  postedDate:{
    type: Date,
    default: Date.now
  },
  views:{
    type: Number,
    default: 0
  },
  likes:{
    type: Number,
    default: 0
  }
});
