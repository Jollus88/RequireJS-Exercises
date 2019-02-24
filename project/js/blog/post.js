// 'u' is mapped to the user.js, and $ to jQuery
define(['../libs/modules/user', 'jquery'], function(u, $){
	// load in user module
	var user = new u();
	console.log(user);

	const returnedModule = function(){
		var name = user.getName();
		this.makePost = function(message){
			console.log(name + ' ' + message + ' posted at ' + new Date());
		}

	}

	return returnedModule;
})