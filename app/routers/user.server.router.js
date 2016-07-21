var user = require('../controllers/user.server.controller');
module.exports = function(app) {
  app.route('/signup')
		.get(user.signup)
    .post(user.create);



  app.get('/hello', user.renderHello);
}
