var User = require('mongoose').model('User');

exports.renderHello = function(req, res) {
  res.render('index',{
		'title' : 'Hello World'
	});
}


// register
exports.signup = function(req, res) {
  res.render('signup',{
    'title' : 'signup'
  });
}
exports.create = function(req, res, next) {
  var user = new User(req.body); // {firstName, lastName, ..., etc}
  user.save(function(err){
    if(err) {
      return next(err);
    }
    else {
      res.json(user);
    }
  });
}
