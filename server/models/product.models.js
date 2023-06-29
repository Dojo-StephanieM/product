const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    title: String,
    price: String,
    description: String
},
{timestamps: true})

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;