var keystone = require('keystone');

exports = module.exports = function(req,res){
  var view = new keystone.View(req,res);
  var locals = res.locals;

  // Set locals
  locals.section = 'updates';

  // Load updates
  view.query('updates', keystone.list('updates').model.find());

  //render view
  view.render('updates');
};
