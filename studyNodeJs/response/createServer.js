/**
 * 
 */

var http = require('http');			//http 모듈 추출
var server = http.createServer();	//웹 서버 생성
server.listen(8080, function(){
	console.log('Server Running at http://127.0.1:8080');
});

var test = function(){
	//서버를 종료합니다. 
	server.close();
};

setTimeout(test, 1000);

