var http = require('http');
var fs = require('fs');

var flowerCatalog = fs.readFileSync('./homePage.html','UTF-8');
var listener = function(req,res) {
	console.log("------",res.url);
	console.log(res.statusCode);
	res.write(flowerCatalog);
	res.end();
};

var server = http.createServer(listener);
server.listen(4000);