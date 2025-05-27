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
}

const getFightById = async (id) => {
  return await Fight.findByPk(id);
}

const updateFight = async (id, newData) => {
  return await Fight.update(newData, { where: { id } })
};

const deleteFight = async (id) => {
  return await Fight.destroy({ where: { id }});
}

module.exports = { 
    createFight,
    getFightById,
    updateFight,
    deleteFight
};