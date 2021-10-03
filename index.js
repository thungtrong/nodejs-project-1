const express = require('express');
const handlebars = require('express-handlebars');

console.log("Hello world");

const path = require('path');


// Load config value
const {port, views, public} = require('./config.json');

// Create server express
const app = express();

// use static file
app.use(express.static(path.join(__dirname, public)));

// Teamplet engine
const configViewEngine = require('./view-engine');
configViewEngine(app, path.join(__dirname, views));


// Routes
const router = require('./src/routes');
router(app);

app.listen(port, function (){
    console.log('listening on port ' + port);
});

