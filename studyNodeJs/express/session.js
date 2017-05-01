/**
 * 
 */

//모듈 
var express = require('express');
var session = require('express-session');

//서버 
var app = express();

app.use(session({
	secret:'secret kye',
	resave:false,
	saveUninitialized:true,
	cookie:{
		maxAge: 60 * 1000
	}
}));

app.use(function(request, response){
	
	//세션 저장
	request.session.now = (new Date()).toUTCString();
	
	//응답
	response.send(request.session);

});

app.listen(8080, function(){
	console.log('Server running at http://2017.0.0.1:8080');

});