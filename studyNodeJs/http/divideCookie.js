/**
 * 
 */
var http = require('http');

http.createServer(function(request, response){
	//쿠키가 있는지 확인 
	if(request.headers.cookie){
		//쿠키를 추출하고 분해 
		var cookie = request.headers.cookie.split(';').map(function(element){
			var element = element.split('=');
			return {
				key:element[0],
				value:element[1]
			};
		});
		
		response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
	}else{
		//쿠키를 생성
		response.writeHead(200,{
			'Content-Type':'text/html',
			'Set-Cookie':[
				'name = silqwer',
				'role = user'
			]
		});
		
		response.end('<h1>쿠키를 생성 했습니다.</h1>');
	}
}).listen(8080, function(){
	console.log('Server Running at http://127.0.0.1:8080');
});