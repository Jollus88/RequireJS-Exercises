console.log('grabbing template.js!');
require(['underscore', 'jquery'], function() {
	//some code
	const showName = function(n){
		let temp = _.template("Hello <%= name %>");
		$("body").html(temp({name: n}));
	}
	return{
		showName: showName
	}
});

require(['lib/modules/template'], function(template){
	template.showName("Joel");
})


