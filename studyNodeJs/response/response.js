/**
 * 
 */

//웹 서버를 생성하고 실행합니다.
require('http').createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello web Server with Node.js!');
}).listen(8080,function(){
	console.log('Server Running at http://127.0.0.1:8080');
});