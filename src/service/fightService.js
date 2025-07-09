const { Op, where, Model } = require('sequelize');
const { Fight } = require('../models');
const { Fighter } = require('../models');
const { Event } = require('../models');

const createFight = async (
    eventId,
    fighterA,
    fighterB,
    winnerId,
    result,
    round,
    endMinute,
    endSecond,
    isTitleFight
) => {
    return Fight.create(
      eventId,
      fighterA,
      fighterB,
      winnerId,
      result,
      round,
      endMinute,
      endSecond,
      isTitleFight
    )
};

const getFightById = async (id) => {
  return await Fight.findByPk(id);
};

const getFightByFighterId = async (id) => {
  return await Fight.findAll({
    where: {
      [Op.or]: [
        { fighterA: id },
        { fighterB: id }
      ]
    }
  });
};

const getFightsByEventId = async (id) => {
  return await Fight.findAll({
    where: {
      eventId: id
    }
  })
};

const getFightsAndEventsByFighter = async(id) => {

  const fightsAndEvents = await Fight.findAll({
    where: {
      [Op.or]: [{fighterA: id}, {fighterB: id}]
    },
    include: [
      {
        model: Event,
        attributes: ['id', 'name', 'date', 'city', 'country', 'arena']
      },
      {
        model: Fighter,
        as: 'FighterA', // Use the same alias you defined in your association
        attributes: ['id', 'fullName', 'nickName', 'nationality']
      },
      {
        model: Fighter,
        as: 'FighterB', // Use the same alias you defined in your association
        attributes: ['id', 'fullName', 'nickName', 'nationality']
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
  return await Fight.update(newData, { where: { id } })
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