var http = require('http');
var fs = require('fs');
var querystring = require('querystring');


http.createServer(function(req,res){
	if(req.url==="/form"){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname+"/html/form.html","UTF-8").pipe(res);
		
	}

	else if(req.method==="POST"){
		var data="";

		req.on("data",function(chunk){
			data += chunk;
		});

		req.on("end",function(chunk){
			console.log(data);//data has query string -> empid=78&name=Chandan+Mandal&dept=Dev
			//Need to parse the 'data' into a object(json format),so need to import 'querystring' module
			var parsed_Data = querystring.parse(data); 
			console.log(parsed_Data);// ->{ empid: '38', name: 'sudhakar', dept: 'dev' }
		});


	}
	else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("Page not found...");
	}
}).listen(3000);