
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', require('./routes/products'));


app.listen(3000, function(){
    console.log('API is live on http://localhost:3000/products');
});