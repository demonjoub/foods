var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
// uploader
var multer  = require('multer');


module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({
		extended:true
	}));
	app.use(bodyParser.json());
  // upload



  app.set('views', './views');
  app.set('view engine', 'jade');

   require('../app/routers/index.server.router')(app);
   require('../app/routers/user.server.router')(app);


   app.use(function(req, res, next){
     res.status(404);
     // respond with html page
     if (req.accepts('html')) {
       res.render('error',{
          'message': 'Not found',
          'error': req.url
     	  });
       return;
     }

     // respond with json
     if (req.accepts('json')) {
       res.send({ error: 'Not found' });
       return;
     }

     // default to plain-text. send()
     res.type('txt').send('Not found');
   });

   // compile sass to css
	app.use('/css',sass({
			src: './scss',
			dest: './public/css',
			outputStyle: 'compressed',
			prefix: '/prefix',
			indentedSyntax:true,
			debug: true
		}
	));

  app.use(express.static('./public'));
  return app;
}
