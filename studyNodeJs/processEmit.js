process.on('exit', function(code){
	console.log('안녕히 계세요.');
});
console.log('프로그램 실행 중1');
process.exit();
console.log('프로그램 실행 중2');
//이벤트 강제로 발생
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중3');