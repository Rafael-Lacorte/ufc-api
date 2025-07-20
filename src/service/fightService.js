const { Op } = require('sequelize');
const { Fight } = require('../models');
const { Fighter } = require('../models');
const { Event } = require('../models');
const { fightSchema, updateFightSchema } = require('./validation/fightSchemas');

const createFight = async (fightData) => {
  try {
    const validated = await fightSchema.validateAsync(fightData, { abortEarly: false})
    return Fight.create(validated)
  } catch (error) {
    console.log("Validation error:", error.details?.[0]?.message || error.message );
    throw error;
  }
};

const getFightById = async (id) => {
  return await Fight.findByPk(id, { where: { deletedAt: null } });
};

const getFightByFighterId = async (id) => {
  return await Fight.findAll({
    where: {
      [Op.or]: [
        { fighterA: id },
        { fighterB: id }
      ],
      deletedAt: null
    }
  });
};

const getFightsByEventId = async (id) => {
  return await Fight.findAll({
    where: {
      eventId: id,
      deletedAt: null
      
    }
  })
};

const getFightsAndEventsByFighter = async(id) => {

  const fightsAndEvents = await Fight.findAll({
    where: {
      [Op.or]: [{fighterA: id}, {fighterB: id}],
      deleteAt: null
    },
    include: [
      {
        model: Event,
        attributes: ['id', 'name', 'date', 'city', 'country', 'arena']
      },
      {
        model: Fighter,
        as: 'FighterA', // Use the same alias you defined in your association
        attributes: ['id', 'fullName', 'nickName', 'birthDate', 'height', 'division', 'nationality']
      },
      {
        model: Fighter,
        as: 'FighterB', // Use the same alias you defined in your association
        attributes: ['id', 'fullName', 'nickName', 'birthDate', 'height', 'division', 'nationality']
      }
    ],
    order: [
      [Event, 'date', 'DESC']
    ] // Optional: order by event date descending
  });

  return fightsAndEvents.map((fight) => {
    const isFighterA = fight.fighterA === parseInt(id);
    const opponent = isFighterA ? fight.FighterB : fight.FighterB;
    const fighter = isFighterA ? fight.FighterA: fight.FighterB; 

    return {
      id: fight.id,
      event: fight.Event,
      result: fight.result,
      winnerId: fight.winnerId,
      round: fight.round,
      endMinute: fight.endMinute,
      endSecond: fight.endSecond,
      isTitleFight: fight.isTitleFight,
      fighter: {
        id: fighter.id,
        fullName: fighter.fullName,
        nickName: fighter.nickName,
        birthDate: fighter.birthDate,
        height: fighter.height,
        division: fighter.division,
        nationality: fighter.nationality
      },
      opponent: {
        id: opponent.id,
        fullName: opponent.fullName,
        nickName: opponent.nickName,
        nationality: opponent.nationality
      }
    }
  });
}

const updateFight = async (id, newData) => {
  try {
    const validated = await updateFightSchema.validateAsync(newData, { abortEarly: false });
    return await Fight.update(validated, { where: { id } });
  
  } catch (error) {
    console.log("Validation error:", error.details?.[0]?.message || error.message );
    throw error;
  }

};

const deleteFight = async (id) => {
  return await Fight.destroy({ where: { id }});
};

module.exports = { 
    createFight,
    getFightById,
    getFightByFighterId,
    getFightsByEventId,
    getFightsAndEventsByFighter,
    updateFight,
    deleteFight
};