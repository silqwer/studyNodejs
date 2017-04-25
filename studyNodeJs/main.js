/**
 * http://usejsdoc.org/
 */
//모듈 추출
var  module = require('./module.js');
var shape = require('./shape.js');
console.log('abs(-273)=%d',module.abs(-273));
console.log('circleArea(3)=%d',module.circleArea(3));

console.log('triangeArea(4,3)=%d', shape.triangleArea(4, 3));
console.log('rectangleArea(5,5)=%d',shape.rectangleArea(5, 5));