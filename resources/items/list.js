module.exports = function listItems(req, res, next){ //here we will name the function just for easier identifying problems in the logs
	res.send({hey: 'there'}); //restify gets the object and returns a http status code and json object
	next();
}