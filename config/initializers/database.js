
var express = require('express')
var mongoose = require('mongoose')
var config = require('nconf')
var path = require('path')
// config/initializers/database.js
var app = express()
module.exports = function (cb) {
  // Initialize the component here then call the callback
  // More logic

  app.use(express.static(path.join(__dirname, 'public')))
  mongoose.connect('mongodb://' + config.get('MONGO_IP') + ':' + config.get('MONGO_PORT') + '/' + config.get('MONGO_DB'), function (err) {
    if (err) {
      console.log('[APP] initialization failed', err)
    } else {
      console.log('DBServer is running on port: ' + config.get('MONGO_PORT'))
    }
  // Return the call back
  })
  cb()
}
