// Home Controller
class HomeController { 

    index(req, res) {
        res.render('home');
    }

    nodejs(req, res) {
        res.send('Welcome to Node.js');
    }
}

module.exports = new HomeController();