/**
 * 
 */

//모듈 추출
var http =require('http');
var fs = require('fs');
var url = require('url');

//서버 생성 및 실행 

http.createServer(function(request, response){
	var pathName = url.parse(request.url).pathname;
	var query = url.parse(request.url, true).query;
	
	//페이지 구분
	if(pathName === '/'){
		//index.html 읽기
		fs.readFile('index.html', function(error, data){
			response.writeHead(200, {'Content-Type':'text/html'});
			//response.end(data);
			response.end('<h1>'+JSON.stringify(query)+'</h1>');
			
			console.log('load index.html');
		});
		
		if(request.method === 'GET'){
			console.log('Request method GET');
		}else if(request.method === 'POST'){
			console.log('Request method POST');
		}
		
	}else if(pathName === '/OtherPage'){
		//OtherPage.html 읽기
		fs.readFile('OtherPage.html', function(error, data){
			response.writeHead(200, {'Content-Type':'text/html'});
			//response.end(data);
			response.end('<h1>'+JSON.stringify(query)+'</h1>');
			
			console.log('load otherPage.html');
		});
		
		if(request.method === 'GET'){
			console.log('Request method GET');
		}else if(request.method === 'POST'){
			console.log('Request method POST');
		}
	}
}).listen(8080, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});
