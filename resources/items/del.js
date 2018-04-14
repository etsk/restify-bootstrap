module.exports = function delItem(req, res, next){ //here we will name the function just for easier identifying problems in the logs
	res.send(202, {hey: 'there'}); //restify gets the object and returns a http status code and json object
	next(); //informs restify
}

//next function is a callback that hands over the control to restify after we're done with the handler
//middleware pattern that is introduced by express