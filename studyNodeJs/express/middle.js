/**
 * 
 */

var express = require('express');
var app = express();

//미들웨어 설정(1)
app.use(function(request, response, next){
	console.log('첫 번째 미들웨어');
	request.asdf = 100; 
	next();
});

//미들웨어 설정(2)
app.use(function(request, response, next){
	console.log('두 번째 미들웨어');
	response.asdf= 200;
	next();
});

//미들웨어 설정(3)
app.use(function(request, response, next){
	console.log('세 번째 미들웨어');
	request.num = 1; 
	response.num= 2;
	next();
});

//미들웨어 설정(4)
app.use(function(request, response, next){
	console.log('네 번째 미들웨어');

	//응답
	response.writeHead(200,{
		'Content-Type':'text/html'
	});
	
	response.end('<h1>'+request.asdf+':'+response.asdf+':'+request.num+':'+response.num+'</h1>');
}).listen(8080, function(){
	
	//서버 실행 
	console.log('Server Running at http:127.0.0.1:8080');
});

