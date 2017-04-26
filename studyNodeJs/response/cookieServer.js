/**
 * 
 */

var http = require('http');
http.createServer(function(request, response){
	var date = new Date();
	date.setDate(date.getDate()+7);
	
	response.writeHead(200,{
		'Content-Type':'text/html',
		'Set-Cookie':[
			'id=silqwer', 
			'role=user',
			'expires='+date.toUTCString()
		]
	});
	response.end('<h1>'+request.headers.cookie+'</h1>');
}).listen(8080, function(){
	console.log('Server Runniung at http://127.0.0.1:8080');
});