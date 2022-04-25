// Requiring expess to create a app using express 
const express = require('express');
const app = express();
const port = 8000;

// Connecting to database and database config
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// using assets folder which contains the styles for the app
app.use(express.static('./assets'));

// Setting up view engine. The view engine used here is 'ejs'.
app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended: false}));

// all the incoming get and post requests will be sent to routes folder
app.use('/',require('./routes'));

// setting up the server to start listening to incoming requests
app.listen(port,function(err){
    if(err){
        console.log(`App crashed due to error : ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);
});