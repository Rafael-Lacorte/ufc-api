const { Op, where } = require('sequelize');
const { Fight } = require('../models');

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
    updateFight,
    deleteFight
};