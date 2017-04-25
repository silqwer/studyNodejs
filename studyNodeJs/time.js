/**
 * 
 */

//시간 측정 시작
console.time('alpha');

let output = 1;

for(let i=1; i<=10; ++i){
	output += 1;

}
console.log('\u001b[31m',output);
console.log('\u001b[32m',output);
console.log('\u001b[33m',output);
console.log('\u001b[34m',output);
console.log('\u001b[35m',output);
console.log('\u001b[36m',output);
console.log('\u001b[37m',output);

console.log('Resuilt:',output);

//시간 측정 종료
console.timeEnd('alpha');