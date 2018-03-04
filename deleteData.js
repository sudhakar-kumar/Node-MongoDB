var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient; 


var url="mongodb://localhost:27017/"; 

http.createServer(function(req,res){

	if(req.url==="/deleteForm"){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname+"/html/updateForm.html","UTF-8").pipe(res);
		
	}

	else if(req.method==="POST"){
		var data="";
		
		req.on("data",function(chunk){ 
			data += chunk; 
		});

		req.on("end",function(chunk){ 
			var parsed_Data = querystring.parse(data);
			console.log(parsed_Data);

			var empid = parsed_Data.empid;
			var name = parsed_Data.name;
			var dept = parsed_Data.dept;
		
			MongoClient.connect(url,function(err,db){
				if(err) throw err;
				var dbo=db.db("DB1");
				
				    dbo.collection("empData2").deleteOne({"empid":empid},function(err,result){
					//updateOne({where ?},{$set:{key:value to update}},callbackfunction) -'$set' is keyword	 	
					if (err) throw err;
					console.log("Emp id:"+empid+" Deleted Successfully!");
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