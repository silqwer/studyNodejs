/**
 * 
 */
// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버를 생성합니다.
var server = http.createServer(function (request, response) {
	//HTMLPage.html 파일을 읽습니다.
	fs.readFile('HTMLPage.html', function (error, data){
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(data);
	});
}).listen(8080, function(){
	console.log('Server running at http://127.0.0.1:8080');
});

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
	//rint 이벤트
	socket.on('rint', function (data) {
		//클라이언트가 전송한 데이터를 출력
		console.log('Client Send Data:', data);
		
		//클라이언트에 smart 이벤트 발생
		socket.broadcast.emit('smart', data);
	});
});