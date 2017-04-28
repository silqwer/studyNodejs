/**
 * 
 */
var http = require('http');

http.createServer(function(request, response){
	//GET COOKIE
	var cookie = request.headers.cookie;
	
	//set COOKIE
	
	response.writeHead(200,{
		'Content-Type':'text/html',
		'Set-cookie':['name=silqwer','role=user']
	});
	
	response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(8080, function(){
	console.log('Server Running at http://127.0.0.1:8080');
});