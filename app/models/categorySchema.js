var mongoose = require('mongoose')
var Schema = mongoose.Schema

var category = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  }
})

var Category = mongoose.model('Category', category)
module.exports = Category
