
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , redis = require('redis')
  , db = redis.createClient();

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.use(function(req, res, next){
  var ua = req.haeders['user-agent'];
  db.zadd('online', Date.now(), ua, next);
});

app.use(function(req, res, next){
  var min = 60 * 1000;
  var ago = Date.now() - min;
  
  db.zrevrangebyscore('online', '+inf', ago, function(err, users){
    if(err){
      return next (err);
    }
    req.online = users;
    next();
  })
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
