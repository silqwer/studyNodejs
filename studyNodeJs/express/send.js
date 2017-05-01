
var express = require('express');
var app = express();

app.use(function(request, response){
	//데이터 생성 
	var output = [];
	for(let i=0; i<3; ++i){
		output.push({
			count:i,
			name:'name-'+i
		});
	}
	
	//응답
	response.send(output);
}).listen(8080,function(){
	//서버 실행 
	console.log('Server Running at http:127.0.0.1:8080');
});