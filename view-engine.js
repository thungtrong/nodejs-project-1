const handlebars = require("express-handlebars");

function configViewEngine(app, path) {
    app.engine('hbs', handlebars({
        extname: ".hbs"
    }));
    app.set('view engine', 'hbs');
    app.set('views', path);
}

module.exports = configViewEngine;