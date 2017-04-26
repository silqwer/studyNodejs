/**
 * 
 */

var onUncaughtException = function (error){
	console.log('예외가 발생했군 ^-^ 이번에만 봐주겠다 ^0^');
	
};

//process 객체에 uncaughtException 이벤트 연결
process.once('uncaughtException', onUncaughtException);

var test = function(){
	setTimeout(test, 2000);
	error.error.error();
};

setTimeout(test, 2000);