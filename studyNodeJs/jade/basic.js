/**
 * 
 */

var jade = require('jade');
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	//jade 파일
	fs.readFile('page.jade','utf8', function(error, data){
		//jade 모듈 사용
		var fn  = jade.compile(data);
		
		//출력
		response.writeHead(200, {
			'Content-Type':'text/html'
		});
		
		response.end(fn({
			name:'silqwer',
			description:'Hello Hello Hello Hello Hello Hello'
		}));
	});
}).listen(8080, function(){
	console.log('Server Running at http:127.0.0.1:8080');
});
