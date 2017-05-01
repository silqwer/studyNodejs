/**
 * 
 */

//모듈 추출
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

//더미 데이터 베이스 
var DummyDB = (function(){
	//변수 선언 
	var DummyDB = {};
	var storage=[];
	var count = 1;
	
	DummyDB.get = function(id){
		if(id){
			//변수 가공 
			id = (typeof id === 'string') ? Number(id) : id;
			
			//데이터 선택
			for(var i in storage){
				if(storage[i].id === id){
					return storage[i];
				}else{
					return storage;
				}
			}
		}
	};
	
	DummyDB.insert = function(data){
		data.id = count++;
		storage.push(data);
		console.log(data);
		return data;
	};
	
	DummyDB.remove = function(id){
		//변수 가공 
		id = (typeof id === 'string') ? Number(id) : id;
		
		//제거 
		for(var i in storage){
			if(storage[i].id === id){
				storage.splice(i,1);
				return true;
			}
		}
		
		return false;
	};
	
	return DummyDB;
})();

//서버 생성
var app = express();

//미들웨어 
app.use(bodyParser.urlencoded({
	extended:false
}));

//라우터 설정 
app.get('/', function(request, response){
	fs.readFile('restful.html', function(error, data){
		response.send(data.toString());
	});
});

app.post('/', function(request, response){
	var id = request.body.id;
	var region = request.body.region;
	var name = request.body.name;
	var data = {region,name};
	DummyDB.insert(data);
	response.redirect('/');
});

//라우터 
app.get('/user', function (request, response){
	console.log(DummyDB.get());
	response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response){
	console.log('id:'+response.params.id);
	response.send(DummyDB.get(response.params.id));
});


app.post('/user', function (request, response){
	//변수 선언
	var name = request.body.name;
	var region = request.body.region;
	
	//유효성 검사
	if(name && region){
		response.send(DummyDB.insert({
			name:name,
			region:region
		}));
	}else{
		throw new Error('error');
	}
});
app.post('/user/:id', function (request, response){});
app.delete('/user/:id', function (request, response){});

app.listen(8080, function(){
	console.log('Server running at http://127.0.0.1:8080');
});
