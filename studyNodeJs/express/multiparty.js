/**
 * 
 */
//모듈
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

//서버 생성
var app = express();

//미들웨어 설정 
app.use(multipart({uploadDir:_dirname = '/48. node/multipart'}));

//라우터 설정 
app.get('/', function(request, response){
	fs.readFile('HTMLPage.html', function(error, data){
		response.send(data.toString());
	});
});

app.post('/', function(request, response){
	//변수 선언 
	var comment = request.body.comment;
	var imgFile = request.files.image;
	
	if(imgFile){
		var name = imgFile.name;
		var path = imgFile.path;
		var type = imgFile.type;
		
		//이미지 파일 확인 
		if(type.indexOf('image') !== -1){
			//이미지 파일의 겨우 : 파일 이름 변경
			var outputPath = _dirname + '/' +Date.now()+'_'+name;
			console.log(outputPath);
			fs.rename(path, outputPath, function(error){
				console.log(request.body);
				console.log(request.files);
				response.redirect('/');
			});
		}else{
			//이미지 파일일 아닐경우 
			fs.unlink(path, function(error){
				response.sendStatus(400);
			});
		}
	}else{
		response.sendStatus(404);
	}
});

app.listen(8080, function(){
	console.log('Server Runnin At Http:/127.0.0.1:8080');
});