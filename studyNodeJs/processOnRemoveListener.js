/**
 * 
 */

//process 객체에 exit 이벤트 연결
process.on('exit', function(code){
	console.log('안녕히 가거라 ^_^..!');
});

//process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', function(error){
	console.log('예외가 발생했군 +ㅁ+ 바주겠다. ^_^..!');
});

//2초간 간격으로 3번 예외를 발생시간다. 
var count =0;
var test = function(){
	//탈출
	count += 1;
	if(count>3){
		return;
	}
	
	setTimeout(test, 2000);
	error.error.error();
	
};


setTimeout(test, 2000);