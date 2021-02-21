const mongoose = require('mongoose');

const dbConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/app', {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = dbConnection;