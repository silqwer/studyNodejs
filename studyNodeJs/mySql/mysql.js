/**
 * 
 */
var fs = require('fs');
var ejs = require('ejs');
var mysql  = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

//데이터베이스 연결
var client = mysql.createConnection({
	host     : '61.96.199.24',
	user     : 'user_swprodgdb',
	password : 'xpzmqlf',
	port	 : 3306,
	database : 'board'
});

//서버 생성
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));

//서버 실행
app.listen(8080, function(){
	console.log('Server running at http://127.0.0.1:8080');
});

//라우트를 수행 
app.get('/', function(request, response){
	fs.readFile('list.html', 'utf8', function(error, data){
		client.query('SELECT * FROM board_pro', function(error, results){
			response.send(ejs.render(data, {
				data:results
			}));
		});
	});	
});

//글 읽기
app.get('/read/:id', function(request, response){});

//글삭제 
app.get('/delete/:id', function(request, response){});

//글작성페이지
app.get('/insert', function(request, response){});

//글작성
app.post('/insert', function(request, response){});

//글수정페이지 
app.get('/edit/:id', function(request, response){});

//글수정
app.post('/edit/:id', function(request, response){});



