
module.exports = function (router) {
  // This is used for calls to /user/:userid
  router.route('/')
  .get(function (req, res, next) {
    res.send('Hola mundo')
  })
}
