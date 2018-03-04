var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient; 

var url="mongodb://localhost:27017/"; 

http.createServer(function(req,res){
	if(req.url==="/findAll"){
		
		MongoClient.connect(url,function(err,db){
				
			if(err) throw err;
			var dbo=db.db("DB1");
			dbo.collection("empData").find({},{_id:0}).toArray(function(err,result){
				if (err) throw err;
				console.log(result);
				res.writeHead(200,{"Content-Type":"text/html"});
				res.end(JSON.stringify(result));
				db.close(); 
			});

		});

	}
	
	else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("Page not found...");
	}
}).listen(3001);