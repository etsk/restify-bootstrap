var Joi = require('joi');

module.exports = function validating(schema){
	return function(req,res,next){
		Joi.validate(req.body, schema, function(err, doc){ //joi validates if theres an error, and then can return a doc
			if (err) {
				//we have to define this error status code as restify does not know what type of error Joi returns when it does not follow the schema required,
				//and will return a 500 error code instead in case it reaches here
				err.statusCode = 400;
				next(err);
			}
			else{
				req.body = doc; //returns the default priority field that is auto assigned in list.js schema
				next();
			}
		});
	};
}