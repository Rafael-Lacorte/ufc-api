const { Ranking, sequelize } = require('../models');

const createRankingRecord = async (rankingRecords, typeOfRanking) => {
const transaction = await sequelize.transaction();
  try {
    for(const record of rankingRecords) {
      const currentRecord = await getCurrentFighterRankingsRecordByType(record.fighterId, typeOfRanking);
        if(await shouldCreate(record, currentRecord, typeOfRanking)) {
          if(currentRecord) {
            await currentRecord.update({ isCurrent: false }, { transaction });
          }
            await Ranking.create({
              fighterId: record.fighterId,
              position: record.position,
              type: typeOfRanking,
              division: record.division,
              isCurrent: true
            },
          {
            transaction
          });
        };
    };

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

const shouldCreate = async (newRecord, currentRecord, typeOfRanking) => {
  if(newRecord.type != typeOfRanking) {
    return false;
  };

  if (currentRecord && currentRecord.position == newRecord.position) {

    return false;
  };

  return true;
}

const getAllActiveRankingsRecords = async () => {
  const rankings = await  Ranking.findAll({
  where: {
      isCurrent: true,
      deleteAt: null
  },
  order:[
    ['position', 'ASC']
  ],
    include: {
      model: require('../models').Fighter,
      attributes: ['fullName']

    }
  });

  const grouped = rankings.reduce((acc, ranking) => {
    const key = ranking.type === 'p4p' ? 'p4p' : ranking.division;

    if (!acc[key]) acc[key] = [];

      
      acc[key].push({
        fullName: ranking.Fighter.fullName,
        position: ranking.position,
        type: ranking.type,
        division: ranking.division,
        isCurrent: ranking.isCurrent
      });
      
      return acc;
    }, {});

  return grouped;
};

const getCurrentFighterRankingsRecord = async (id) => {
  return Ranking.findOne({
  where: {
      fighterId: id,
      isCurrent: true,
      deletedAt: null
    }
  });
};


const getCurrentFighterRankingsRecordByType = async (id, typeOfRanking) => {
    return Ranking.findOne({
    where: {
        fighterId: id,
        type: typeOfRanking,
        isCurrent: true,
        deletedAt:null
      }
    });
  };
  

const getDivisionRankings = async (division) => {
    return await Ranking.findAll({
        where: {
            division: division,
            isCurrent: true,
            deletedAt:null
        },
        order: [
            ['position', 'ASC']
        ]
    });
};

const getP4pRankings = async () => {
    return await Ranking.findAll({
        attributes: ['id', 'position', 'fighterId'],
        where: {
            type: 'p4p',
            isCurrent: true,
            deletedAt: null
        },
        order: [
            ['position', 'ASC']
        ],
        include: {
            model: require('../models').Fighter,
            attributes: ['id', 'fullName', 'nickName', 'division', 'wins', 'losses']
        },
    });
};

const deleteRankings = async (id) => {
  return await Ranking.destroy({ where: { id }})
}

module.exports = {
    getDivisionRankings,
    getAllActiveRankingsRecords,
    getCurrentFighterRankingsRecord,
    getP4pRankings,
    createRankingRecord,
    deleteRankings
}