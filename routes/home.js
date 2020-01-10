const home_controller = require('../controllers/home');

module.exports = (app) => {
  app.route('/').get(home_controller.index)
}