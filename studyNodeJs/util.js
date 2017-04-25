/**
 * 
 * Node.js의 보조적인 기능을 모아둔 모듈 
 */

var util = require('util');
var data = util.format('%d + %d = %d', 1,2, 1+2);
console.log(data);