/**
 * 
 */

var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
	fs.readFile('b.mp3',function(error, data){
		response.writeHead(200, {'Content-Type':'audio/mp3'});
		response.end(data);
	});
}).listen(8080, function(){
	console.log('Server Running at http://127.0.0.1:8080');
});