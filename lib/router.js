Router.configure({
  	layoutTemplate: 'index',
  	loadingTemplate: 'loading',
});

Router.map(function() {
	this.route('layout', {
		path: '/'
	});
	this.route('employeeIndex', {
		path: '/employee/index'
	});
});

Router.onBeforeAction('loading');
