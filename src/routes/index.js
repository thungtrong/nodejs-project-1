const home = require('./home');
const contact = require('./contact');
const user = require('./user');

function router(app) {
    
    app.use('/home', home);

    app.use('/contact', contact);

    app.use('/user', user);
}

module.exports = router;