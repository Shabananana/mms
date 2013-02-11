//Models

var Image = Backbone.Model.extend({
  id: function(){
    return this.id;
  },
  title: function(){
    return this.title;
  }
  url: function(){
    return this.url;
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    'page/view': 'viewPage',
    'page/view/:id': 'viewPage',
    'image/view': 'viewImage',
    'image/view/:id': 'viewImage',
    'campaign/view': 'viewCampaign',
    'campaign/view/:id': 'viewCampaign',
    'template/view': 'viewTemplate',
    'template/view/:id': 'viewTemplate',
    'view': 'viewHub',
    'page/create': 'createPage',
    'image/create': 'createImage',
    'campaign/create': 'createCampaign',
    'template/create': 'createTemplate',
    'create': 'createHub',
    'help': 'help',
    'search/:query': 'search',
    '*actions': 'defaultRoute' // matches http://example.com/#anything-here
  }
});

// Initiate the router
var app_router = new AppRouter;

app_router.on('route:viewPage', function(id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewImage', function(id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewCampaign', function(id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewTemplate', function(id){
  if(id != null && typeof parseInt(id) === 'number'){
    alert('you chose an id of ' + id);
  } else {
    alert('you did not provide an id or the id you provided does not exist.');
  }
});

app_router.on('route:viewImage', function(id){
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
  $.ajax({
    type: 'GET',
    url: '/image',
    success: function(result){
      $('#content-wrapper').empty().append(result);
    },
    error: function(error){}
  });
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