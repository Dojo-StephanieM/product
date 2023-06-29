const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/products2-db"
const dbName = 'products2-db'
mongoose.connect(mongoURI + dbName)
    .then(() => console.log(`Connected to the ${dbName}`))
    .catch((err) => console.log(`ERROR IN CONNECTING TO DB`, err) );