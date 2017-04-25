/**
 * http://usejsdoc.org/
 */
//절대값을 구하는 메서드
exports.abs = function(number){
	if(0<number){
		return ;
	}else{
		return -number;
	}
};

exports.circleArea = function(radius){
	return radius * radius + Math.PI;
};