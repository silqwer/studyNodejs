/**
 * 
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/setCookie', function(request, response){
	//쿠키생성
	response.cookie('string','cookie');
	response.cookie('json',{
		name:'silqwer',
		role:'user'
	});
	
	response.redirect('/getCookie');
});

app.get('/getCookie', function(request, response){
	//쿠키생성
	response.send(request.cookies);
});


app.listen(8080, function(){
	console.log('Server Running at http:127.0.0.1:8080');
});
