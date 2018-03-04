var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url==="/form"){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream(__dirname+"/html/form.html","UTF-8").pipe(res);
		// __dirname -> global object, will fetch the path of this directory
		// Here, __dirname points to 'home/sudhakar/Workspace/NodeTrial/'
	}
	else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("Page not found...");
	}
}).listen(3000);