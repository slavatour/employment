Template.loginFormEmployee.helpers({

});
Template.loginFormEmployee.events({
	"click #registerEmployeeOpen": function(e, target) {
		e.preventDefault();
		showRegisterForm();
	},
	"click #signInEmloyeeOpen": function(e, target) {
		e.preventDefault();
		showLogInForm();
	},
	"submit #register-form": function(e, t) {
		e.preventDefault();
		var email = t.find('#account-email').value,
        	password = t.find('#account-password').value;
		Accounts.createUser({email: email, password: password}, function (err) {
			if(err) {
				console.log(err);
			} else {
				showLogInForm();		
			}
		});
		return false;
	},
	"submit #employeeForm": function(e,t) {
		e.preventDefault();
		var email = t.find('#inputEmail').value,
        	password = t.find('#inputPassword').value;
    	Meteor.loginWithPassword(email, password, function(err){
    		if(err) {
				console.log("no");
    		} else {
				console.log("yes");
    		}
    	});
    	return false;
	}
});

function showRegisterForm() {
	$("#employeeForm").hide();
	$(".employeeNewForm").show();	
}
function showLogInForm() {
	$("#employeeForm").show();
	$(".employeeNewForm").hide();
}