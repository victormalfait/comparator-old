const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const defaultRoute = require('./routes/DefaultRoute');
const productRoute = require('./routes/ProductRoute');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//mongo connection
let dev_db_url = 'mongodb://comparator-user:2tg77s9r@ds111065.mlab.com:11065/comparator';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', defaultRoute);
app.use('/product', productRoute);

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable !');
});

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
