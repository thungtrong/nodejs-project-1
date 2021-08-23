const express = require('express');
const handlebars = require('express-handlebars');


const path = require('path');

const router = require('./src/routes');

const configViewEngine = require('./view-engine');

// Load config value
const {port, views, public} = require('./config.json');

// Create server express
const app = express();

// use static file
app.use(express.static(path.join(__dirname, public)));

// Teamplet engine
configViewEngine(app, path.join(__dirname, views));

// Routes
router(app);

app.listen(port, function (){
    console.log('listening on port ' + port);
});

