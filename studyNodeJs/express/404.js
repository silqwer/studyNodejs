
var express = require('express');
var app = express();

app.use(function(request, response, next){
	
	//응답
	response.status(404).send('<h1>ERROR</h1>');
}).listen(8080,function(){
	//서버 실행 
	console.log('Server Running at http:127.0.0.1:8080');
});