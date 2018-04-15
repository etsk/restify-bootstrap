var Joi = require('joi');

module.exports = Joi.object().required().keys({
	label: Joi.string().required(),
});