/**
 * 
 */

var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
	fs.readFile('a.jpg',function(error, data){
		response.writeHead(200, {'Content-Type':'image/jpeg'});
		response.end(data);
	});
}).listen(8080, function(){
	console.log('Server Running at http://127.0.0.1:8080');
});