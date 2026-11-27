const { index } = require('./PrinterController');

class HomeController {
    index(req, res) {
        res.render('home');
        res.render('hello');
    }
}

module.exports = new HomeController();
