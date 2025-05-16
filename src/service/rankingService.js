const { Ranking } = require('../models');

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

module.exports = {
    getDivisionRankings
}