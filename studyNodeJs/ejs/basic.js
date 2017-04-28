/**
 * 외부 모듈 사용하기
 */
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request, response){
	//page.ejs 파일 읽기
	fs.readFile('page.ejs','utf8', function(error, data){
		response.writeHead(200, {
			'Content-Type':'text/html'
		});
		response.end(ejs.render(data, {
			//page에 데이터 전달
			name: 'LOOKAS',
			descripttion:'Latte'
		}));
	});
}).listen(8080,function(){
	console.log('Server Running at http:127.0.0.1:8080');
});
