const mongoose = require('mongoose');


mongoose.connect('https://ap-south-1.aws.data.mongodb-api.com/app/data-pvcmf/endpoint/data/v1', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;