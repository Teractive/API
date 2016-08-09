var Category = require('../models/categorySchema')
module.exports = function (router) {
  router.route('/')
  .get(function (req, res, next) {
    res.send('Hola categoria')
  })
  .post(function (req, res, next) {
    var category = new Category({
      name: req.body.name,
      description: req.body.description
    })
    category.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Category "' + category.name + '" stored')
        res.write('Category "' + category.name + '" stored')
      }
      res.end()
    })
  })
}
