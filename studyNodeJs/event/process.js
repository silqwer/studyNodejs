/**
 * http://usejsdoc.org/
process 객체
프로그램과 관련된 정보를 객체 
node.js 만이 가진 객체 
 */

process.argv.forEach(function(item, index){
	//출력
	console.log(index+':'+typeof(item)+':',item);
	
	if(item==='--exit'){
		let exitTime = Number(process.argv[index+1]);
		
		setTimeout(function(){
			process.exit();
		}, exitTime);
	}
	
});

