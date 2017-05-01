//모듈 추출
var express = require('express');
var app = express();

//서버 생성
app.use(function(request, response){
	response.writeHead(200, {
		'Content-Type':'text/html'
	});
	
	response.end('<h1>Hello express</h1>');
}).listen(8080, function(){
	//서버 실행 
	console.log('Server Running at http:127.0.0.1:8080');
});
