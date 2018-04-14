var restify = require('restify');
var bunyan = require('bunyan');

var options = {
	name: "To Do API"
};

var server = restify.createServer(options);

// //logs what happens after the REST web service is called
// server.on('after', function(){
// 	//argements returns the request and response objects which returns a lot of things. too many.
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

module.exports = server; //this helps routes get the value

require('./routes'); //circular dependency (server is requiring route and routes is requiring server)