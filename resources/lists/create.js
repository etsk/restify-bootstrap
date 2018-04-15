module.exports = function createList(req, res, next){ //here we will name the function just for easier identifying problems in the logs
	var body = req.body;
	console.log('body:', body);
	res.send({hey: 'there'}); //restify gets the object and returns a http status code and json object
	next();
}