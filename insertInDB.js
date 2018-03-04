var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient; //Be careful about case here; 
//'mongodb' is external module,needs installation using npm


var url="mongodb://localhost:27017/"; //27017 is default port of mongodb

http.createServer(function(req,res){
	if(req.url==="/form"){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname+"/html/form.html","UTF-8").pipe(res);
		
	}

	else if(req.method==="POST"){
		var data="";
		//data from form comes in chunks, hence need to accumulate all those chunks into one unit
		req.on("data",function(chunk){ //data is a keyword here
			data += chunk; //variable 'data' will have all data as in querystring,need to be parsed  
		});

		req.on("end",function(chunk){ //end is a keyword here
			var parsed_Data = querystring.parse(data); //parsing
			MongoClient.connect(url,function(err,db){
				if(err) throw err;
				var dbo=db.db("DB1");
				dbo.collection("empData2").insertOne(parsed_Data,function(err,result){
					if (err) throw err;
					console.log("Data Inserted Successfully!");
					//console.log(result);
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