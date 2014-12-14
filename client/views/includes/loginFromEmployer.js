Template.loginFormEmployer.helpers({

});
Template.loginFormEmployer.events({
	"click #registerEmployerOpen": function(e, target) {
		e.preventDefault();
		$("#employerForm").hide();
		$("#employerNewForm").show();
	},
	"click #signInEmployerOpen": function(e, target) {
		e.preventDefault();
		$("#employerForm").show();
		$("#employerNewForm").hide();
	},
	"click #loginEmployer": function(e, target) {
		e.preventDefault();
	}
});