const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
},{
    versionKey: false
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;