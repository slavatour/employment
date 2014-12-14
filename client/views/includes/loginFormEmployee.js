Template.loginFormEmployee.helpers({

});
Template.loginFormEmployee.events({
	"click #registerEmployeeOpen": function(e, target) {
		e.preventDefault();
		$("#employeeForm").hide();
		$(".employeeNewForm").show();
	},
	"click #signInEmloyeeOpen": function(e, target) {
		e.preventDefault();
		$("#employeeForm").show();
		$(".employeeNewForm").hide();
	},
	"submit #register-form": function(e, t) {
		e.preventDefault();
		var email = t.find('#account-email').value,
        	password = t.find('#account-password').value;
		Accounts.createUser({email: email, password: password}, function (err) {
			if(err) {
				console.log("Error");
			} else {
				
			}
		});
		return false;
	}
});