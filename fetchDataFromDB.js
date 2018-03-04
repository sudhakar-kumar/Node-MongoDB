var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient; 


var url="mongodb://localhost:27017/"; 

http.createServer(function(req,res){
	if(req.url==="/findForm"){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname+"/html/findForm.html","UTF-8").pipe(res);
		
	}

	else if(req.method==="POST"){
		var data="";
		
		req.on("data",function(chunk){ 
			data += chunk; 
		});

		req.on("end",function(chunk){ 
			var parsed_Data = querystring.parse(data);
			//var hideid = { _id : 0};
			//console.log(parsed_Data); 
			MongoClient.connect(url,function(err,db){
				if(err) throw err;
				var dbo=db.db("DB1");
				
				    dbo.collection("empData").findOne(parsed_Data,function(err,result){
				//	dbo.collection("empData2").findOne(parsed_Data,{_id:false},function(err,result){
					if (err) throw err;
					console.log(result);
					db.close(); 
				});

			}); 
			
		});
	
	}

	else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("Page not found...");
	}
}).listen(3001);