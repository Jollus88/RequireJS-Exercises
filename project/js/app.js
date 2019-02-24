// require(['myfile'], function(myFile){
// 	myFile.init();
// })
// Remember that RequireJS doesn’t care about .js on the end!
console.log('loaded config!');
require.config({
	baseUrl: './js',
	paths: {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
		underscore: "libs/underscore",
		myteam: "libs/modules/team",
		mylogger: "libs/modules/player"
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		}
	}
});

define(function(require){
	const myteam = require("./libs/modules/team");
	const mylogger = require("./libs/modules/player");
	alert("Player name : " + myteam.player);
	mylogger.myfunc();
})

// define(['libs/modules/user', 'blog/post'], function(u, p){
// 	var user = new u(), post = new p();
// 	post.makePost();
// });