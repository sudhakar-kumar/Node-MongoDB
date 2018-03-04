var http = require('http');

http.createServer(function(req,res){
	res.end("Server is up and running....");
}).listen(3000);


//creating a server and listening on port 3000