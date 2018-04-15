var restify = require('restify');
var bunyan = require('bunyan');

var options = {
	name: "To Do API"
};

var server = restify.createServer(options);

// EXAMPLE 2
//curl -i -X PUT localhost:8080/lists/mylist --data '{"hello":"there"}' -H 'content-type: application/json'
// server.use(function(req, res, next){
// 	console.log('middleware here', req.body); //cannot see body
// 	next();
// });

//helps to access the request body contents received
server.use(restify.plugins.bodyParser({
	maxBodySize: 10 * 1024
}));

// server.use(function(req, res, next){
// 	console.log('middleware2 here', req.body); //can see body
// 	next();
// });
//END EXAMPLE 2


// EXAMPLE 1
// //logs what happens after the REST web service is called
// server.on('after', function(){
// 	//arguments returns the request and response objects which returns a lot of things. too many.
// 	console.log('after', arguments); 
// }); 

//http://restify.com/docs/plugins-api/#auditlogger
//therefore, we can use the restify audit logger
server.on('after', restify.plugins.auditLogger({ 
	//auditlogger gets an object that has to have a log function
	log: bunyan.createLogger({
		name: 'audit',
		stream: process.stdout //standard output log stream, can later output it onto a file once we deploy it on a server.
	}), //we use bunyan as a logging function - known logger for nodejs
	event: 'after',
	printLog : true
}));
// END EXAMPLE 1

module.exports = server; //this helps routes get the value

require('./routes'); //circular dependency (server is requiring route and routes is requiring server)