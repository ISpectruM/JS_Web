const Product = require('../models/Product')

module.exports.index = (req, res) => {
  let queryData = req.query

  Product.find({buyer: null}).populate('category').then((products) => {
    if (queryData.query) {
      products = products.filter(
        pr => pr.name.toLowerCase().indexOf(queryData.query.toLowerCase()) !== -1)
    }

    let data = {products: products}
    if (req.query.error) {
      data.error = req.query.error
    } else if (req.query.success) {
      data.success = req.query.success
    }

    res.render('home/index', data)
  })
}
