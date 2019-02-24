console.log('grabbing template.js!');
define(['underscore', 'jquery'], function() {
	//some code
	const showName = function(n){
		let temp = _.template("Hello <%= name %>");
		$("body").html(temp({name: n}));
	};
	return{
		showName: showName
	};
});

require(['libs/modules/template'], function(template){
	console.log('attempting to show name')
	template.showName("Joel");
})


