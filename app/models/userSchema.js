var mongoose = require ("mongoose");

module.exports = new mongoose.Schema("User", {
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  image:{
    type: String,
    default: ""
  },
  creationDate:{
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 31
  },
  lastConnection:{
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 31
  },
  geolocalization:{
    xPosition:{
      type: String,
      required: true
    },
    yPosition:{
      type: String
      required: true
    }
  },
  reviews:{
    user:{
      type: String,
      required: true
    },
    review:{
      type: String,
      required: true
    },
    calification:{
      type: Number,
      reque
    }
  }
});
