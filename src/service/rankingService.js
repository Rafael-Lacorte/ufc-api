const { Ranking } = require('../models');
const fighter = require('../models/fighter');

const createRankingsRecord = async (
    fighterId,
    position,
    type,
    division,
    isCurrent
) => {
    return await Ranking.create(
      fighterId,
      position,
      type,
      division,
      isCurrent
    );
};

const getDivisionRankings = async (division) => {
    return await Ranking.findAll({
        where: {
            division: division,
            isCurrent: true
        },
        order: [
            ['position', 'ASC']
        ]
    });
};

const getP4pRankings = async () => {
    return await Ranking.findAll({
        where: {
            type: 'p4p',
            isCurrent: true
        },
        order: [
            ['position', 'ASC']
        ]
    });
};

const deleteRankings = async () => {
  return await Ranking.destroy({ where: { id }})
}

module.exports = {
    getDivisionRankings,
    getP4pRankings,
    createRankingsRecord,
    deleteRankings
}