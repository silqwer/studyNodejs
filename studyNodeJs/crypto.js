/**
 * 
 */
var crypto = require('crypto');

//해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash:',output);

//암호화
var key = 'silqwer';
var input = 'passwd';
var cipher = crypto.createCipher('aes192',key);
cipher.update(input,'utf8','base64');
var cipheredOutput = cipher.final('base64');

//암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var deciphererdOutput = decipher.final('utf8');


//출력
console.log('원래문자열:'+input);
console.log('암호화:'+cipheredOutput);
console.log('해제:'+deciphererdOutput);

