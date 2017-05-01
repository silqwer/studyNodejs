
var express = require('express');
var app = express();

app.use(function(request, response){
	
	//응답
	var agent = request.header('User-Agent');
	
	if(agent.toLowerCase().match(/chrome/)){
		response.send('<h1>Hello Chrome</h1>');
	}else{
		response.send('<h1>Hello Ie</h1>');
	}
	
	console.log(request.headers);
	console.log(agent);
	response.sendStatus(200);
}).listen(8080,function(){
	//서버 실행 
	console.log('Server Running at http:127.0.0.1:8080');
});