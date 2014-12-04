var express = require('express');


var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/',function(req,res){
	console.log("Cookies: ",req.cookies);/*something*/
});
function isAuthenticated(req,res,next){
	if(req.query.password !== "1234")
	{
		res.send("you are not autherized");
	}
	else
	{
		next();// it tells sever to excute next parameter.
	}
}
function next1(req,res,next){
	console.log('next 1');
	next();
}

function next2(req,res,next){
	console.log('next 2');
	next();
}

function next3(req,res,next){
	console.log('next 3');
	next();
}

app.get('/user/:id',isAuthenticated,next1,next2,next3,function(req,res){
	var user = {
		id: req.params.id,
		name: "Jeffery"
	}

	console.log(req.query);
	res.json(user);
});

app.get('/hello/:name',function(req,res){
	res.send("hi " + req.params.name);
});

app.get('/*',function(req,res){
	res.send("Ni hao");
});

app.listen(8080, function(){
	console.log('server running on port 8080');
});