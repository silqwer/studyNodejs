/**
 * 
 */

var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//서버 
var app = express();

//미들 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

//라우터 
app.get('/', function(request, response){
	if(request.cookie.auth){
		response.send('<h1>Login Success</h1>');
	}else{
		response.redirect('/login');
	}
});

app.get('/login', function(request, response){
	fs.readFile('login.jsp', function(error, data){
		response.send(data.toString());
	});
});

app.post('/login', function(request, response){
	//쿠키를 생성
	var id = request.body.userId;
	var pw = request.body.userPw;

	//출력
	console.log(id, pw);
	console.log(request.body);

	//로그인을 확인
	if(id==='silqwer' && pw === '1234'){
		console.log('로그인 성공');
		response.cookie('auth', true);
		response.redirect('/');
	}else{
		console.log('로그인 실패');
		response.redirect('/login');
	}
});
	
	
app.listen(8080, function(){
	console.log('Server running at http://127.0.0.1:8080');
});