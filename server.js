const express = require('express');
const indexController = require('./src/controllers/indexController');
const app = express();

app.get('/', indexController.index);

app.get('/product/:idProduct', (req, res) => {
	res.render('product.ejs', {id_product: req.params.idProduct});
});

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);