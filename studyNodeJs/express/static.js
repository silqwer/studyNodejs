/**
 * 
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/resources'));
app.use(function(request, response){
	response.writeHead(200, {
		'Content-Type':'text/html'
	});
	
	response.end('<img src="/a.jpg" width="100%"/>');
});
app.listen(8080, function(){
	console.log('Server Running at http:127.0.0.1:8080');
});