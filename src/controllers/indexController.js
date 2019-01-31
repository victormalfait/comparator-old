'use strict';

class IndexController {
  index(req, res) {
    const products = [{
      name: "nom 1"
    }, {
      name: "nom2"
    }];
    res.render('../views/index.ejs', {products: products});
  };
}

module.exports = new IndexController();