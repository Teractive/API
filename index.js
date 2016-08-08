var bodyParser = require('body-parser')
var nconf = require('nconf')
var async = require('async')
var server = require('./config/initializers/server')
var database = require('./config/initializers/database')

// var uri = 'mongodb://NOMBRE:NOMBRE01@ds023455.mlab.com:23455/ventas';

// Load environment variables
require('dotenv').load()

// Set up configs
nconf.use('memory')
// First load command line arguments
nconf.argv()
// Load environment variables
nconf.env()
// Load config file for the environment
// require('./config/environments/' + nconf.get('NODE_ENV'));

// Initialize Modules
async.series([
  function initializeDBConnection (callback) {
    database(callback)
  },
  function startServer (callback) {
    server(callback)
  }], function (err) {
  if (err) {
    console.log('[APP] initialization failed', err)
  } else {
    console.log('[APP] initialized SUCCESSFULLY')
  }
})

  // mongoose.connect(uri, function (err) {
  // if (err) throw err;
  // console.log('Server MongoDB is running on port 27017, DB: selling');

