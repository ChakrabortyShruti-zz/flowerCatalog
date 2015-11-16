var http = require('http');
var fs = require('fs');

var listener = function(req,res){
	// console.log(req.url,res.statusCode,req.method);
	// if()
	var path = "./"+req.url;
	fs.readFile(path, function(err, data){
		console.log(data,"*******",err);
		if(err){
			res.statusCode = 404;
			console.log(res.statusCode);
			res.end();
			return;
		}
		res.statusCode = 200;
		console.log(res.statusCode);
		res.end(data);
	})
};


var server = http.createServer(listener);
server.listen(5000);

