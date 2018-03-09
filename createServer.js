//Creating a Server and listening on port 3000

const http = require('http');
//use 'const' for Not-changing-variables,otherwise 'var' is preferred

http.createServer(function(req,res){
	res.end("Server is up and running....");
}).listen(3000);
