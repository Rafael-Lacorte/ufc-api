const Joi = require('joi');

const fighterSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  nickName: Joi.string().allow(null, ''),
  birthDate: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(),
  height: Joi.number().positive().required(),
  division: Joi.string().required(),
  division: Joi.string().valid(
    'heavyweight',
    'light_heavyweight',
    'middleweight',
    'welterweight',
    'lightweight',
    'featherweight',
    'bantamweight',
    'flyweight'
  ).required(),
  nationality: Joi.string().required(),
  city: Joi.string().allow(null),
  wins: Joi.number().integer().min(0).required(),
  losses: Joi.number().integer().min(0).required(),
  draws: Joi.number().integer().min(0).required() 
});

const updateFighterSchema = Joi.object({
  fullName: Joi.string().min(3),
  nickName: Joi.string().allow(null, ''),
  birthDate: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/),
  height: Joi.number().positive(),
  division: Joi.string().valid(
    'heavyweight',
    'light_heavyweight',
    'middleweight',
    'welterweight',
    'lightweight',
    'featherweight',
    'bantamweight',
    'flyweight'
  ),
  nationality: Joi.string(),
  city: Joi.string().allow(null),
  wins: Joi.number().integer().min(0),
  losses: Joi.number().integer().min(0),
  draws: Joi.number().integer().min(0)
}).min(1);

module.exports = {
  fighterSchema,
  updateFighterSchema
}