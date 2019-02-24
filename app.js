// require(['myfile'], function(myFile){
// 	myFile.init();
// })
// Remember that RequireJS doesn’t care about .js on the end!
console.log('loaded config!');
require.config({
	paths: {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
		underscore: "libs/underscore",
	}
});