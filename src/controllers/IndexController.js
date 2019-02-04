'use strict';

class IndexController {
  index(req, res) {
    const products = [{
      name: "Test 1"
    }, {
      name: "test 2"
    }];
    res.render('../src/views/index.ejs', {products: products});
  };
}

module.exports = new IndexController();
