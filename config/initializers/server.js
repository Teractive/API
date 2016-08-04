var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Create express app
var app = express()

// Local dependencies
var config = require('nconf')

// Middelware
app.use(bodyParser.json({type: '*/*'}))


var start = function (cb) {
  require('../../app/routes/index')(app)
  app.use(express.static(path.join(__dirname, 'public')))


  // Error handler
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: (app.get('env') === 'development' ? err : {})
    })
    next(err)
  })

  app.listen(config.get('NODE_PORT'))
  console.log('Server is running on port: ' + config.get('NODE_PORT'))

  if (cb) {
    return cb()
  }
}

module.exports = start
