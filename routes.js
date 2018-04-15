var server = require('./server');
var resources = require('./resources');
var validating = require('./middleware/validating');
var schemas = require('./schemas');

// Lists

// server.get('/lists', function(req, res){  //can actually define handler in here, but will get messy
// 	asdasdasd
// });


server.get('/lists', resources.lists.list); //gets lists //therefore define another handler function
//validating helps to validate the schema
server.put('/lists/:list', validating(schemas.list), resources.lists.create); // PUT /lists/mylist - mylist url part will be available in the list attribute // creates a list
server.del('/lists/:list', resources.lists.del) //delete list

// Items

server.get('/lists/:list/items', resources.items.list);
server.post('/lists/:list/items', validating(schemas.item), resources.items.create);
server.del('/lists/:list/items/:item', resources.items.del);


// server.get(urlPattern, function(req, res){
// 	res.send(obj);
// });