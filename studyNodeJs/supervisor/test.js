/**
 * 
 */

var http = require('http');
http.createServer(function(request, responese){
	responese.writeHead(200, {
		'Content-Type':'text/html'
	});
	
	responese.end('<h1>Test - File - 33333</h1>');
}).listen(8080, function(){
	console.log('Server Running at http:127.0.0.1:8080');
});