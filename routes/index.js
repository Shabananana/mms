
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('hubworld', { title: 'Welcome to Misfit' });
};