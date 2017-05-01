/**
 * 
 */
var express = require('express');
var app = express();
app.get('/a', function(request, response){
	response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response){
	response.send('<a href="/a">Go to A</a>');
});

app.get('/page/:id', function(request, response){
	var id = request.params.id;
	response.send('<h1>'+id+'</h1>');
});

app.listen(8080, function(){
	console.log('Server Running at http:127.0.0.1:8080');
});