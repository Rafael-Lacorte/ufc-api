const Joi = require('joi');

const fightSchema = Joi.object({
  eventId: Joi.number().integer().required(),
  fighterA: Joi.number().integer().required(),
  fighterB: Joi.number().integer().required(),
  winnerId: Joi.number().integer().required(),
  result: Joi.string().valid(
    'ko_tko',
    'submission',
    'decision_unanimous',
    'decision_split',
    'no_contest',
    'dq'
  ).required(),
  round: Joi.number().min(2).required(),
  endMinute: Joi.number().integer().min(1).max(5).required(),
  endSecond: Joi.number().integer().min(0).max(59).required(),
  isTitleFight: Joi.boolean().required()
});

const updateFightSchema = Joi.object({
  name: Joi.string().min(5),
  date: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/),
  country: Joi.string().min(2),
  city: Joi.string().min(2),
  arena: Joi.string().min(2)
}).min(1);

module.exports = {
  fightSchema,
  updateFightSchema
}