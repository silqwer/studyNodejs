/**
 * http://usejsdoc.org/
 */
// 파일시스템 모듈 추출
var fs = require('fs');

//모듈 사용
var text = fs.readFileSync('D://48. node//webserver.js','utf8');
fs.readFile('D://48. node//webserver.js','utf8', function(err, data){
	console.log('readFile:',data);
});
console.log(text);


//파일 읽기(동기)
try {
	var date = fs.readFileSync('D://48. node//webserver.js','utf8');
	console.log('readFile:',data);
} catch (e) {
	console.log(e);
}

//파일 쓰기(동기)
try {
	fs.writeFileSync('D://48. node//textFile.txt','Hello World!','utf8');
	console.log('FILE WRITE COMPLETE');
} catch (e) {
	console.log(e);
}

//파일 읽기(비동기)
fs.readFile('D://48. node//textFile.txt', 'utf-8', function(error, data){
	if(error){
		console.log(error);
	}else{
		console.log('file read:', data);
	}
});

//파일 쓰기(비동기)
fs.writeFile('D://48. node//textSyncFile.txt', 'utf-8' , function(error){
	if(error){
		console.log(error);
	}else{
		console.log()
	}
});