var Joi = require('joi');

module.exports = Joi.object().required().keys({
	name: Joi.string().required(),
	description: Joi.string(),
	priority: Joi.number().integer().default(0),
});