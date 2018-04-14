//responsible for getting the server object and making it listening to a specifc port

var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 8080;

server.listen(port, function(){
	console.log('API server listening on %j', server.address()); // returns a descriptor object that specifies the ip address and port that the server is bound to
});