const Product = require('../models/product.models')

const createProduct = (req,res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.status(201).json(newProduct);
    })
    .catch((err) => console.log('ERROR IN CREATE', err));
}

const getAllProducts = (req,res) => {
    Product.find({})
    .then((allProducts) => {
        res.status(200).json(allProducts);
    })
    .catch((err) => console.log('ERROR IN FINDING ALL', err))
}

const oneProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err))
}

const updateProduct = (req,res) => {
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(product => res.json(product))
    .catch(err => console.log('ERROR IN UPDATING ONE', err));
}

const deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.status(400).json(err))
}

module.exports = {
    createProduct, 
    getAllProducts,
    oneProduct, 
    updateProduct,
    deleteProduct
};