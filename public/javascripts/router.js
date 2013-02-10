var AppRouter = Backbone.Router.extend({
  routes: {
    'view/:page': 'viewPage',
    'view/:page/:id': 'viewPage',
    'view/:image': 'viewImage',
    'view/:image/:id': 'viewImage',
    'view/:campaign': 'viewCampaign',
    'view/:campaign/:id': 'viewCampaign',
    'view/:template': 'viewTemplate',
    'view/:template/:id': 'viewTemplate',
    'view': 'viewHub',
    'create/page': 'createPage',
    'create/image': 'createImage',
    'create/campaign': 'createCampaign',
    'create/template': 'createTemplate',
    'create': 'createHub',
    'help': 'help',
    'search/:query': 'search',
    '*actions': 'defaultRoute' // matches http://example.com/#anything-here
  }
});

// Initiate the router
var app_router = new AppRouter;

app_router.on('route:viewPage', function(page, id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewImage', function(image, id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewCampaign', function(campaign, id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewTemplate', function(template, id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewImage', function(image, id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewHub', function(){
  //display landing page with categories of items which can be viewed.
});

app_router.on('route:createPage', function(){
  //create a page.
});

app_router.on('route:createImage', function(){
  //create a image.
});

app_router.on('route:createCampaign', function(){
  //create a campaign.
});

app_router.on('route:createTemplate', function(){
  //create a template.
});

app_router.on('route:createHub', function(){
  //display landing page with categories of items which can be created.
});

app_router.on('route:help', function(){
  //display help section.
});

app_router.on('search', function(query){
  //return results
});

app_router.on('route:defaultRoute', function(actions) {
  alert(actions);
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();