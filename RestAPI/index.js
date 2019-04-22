const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up the express app
const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static("public"));

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
    //console.log(err);
});

// listen  for requests
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
});
