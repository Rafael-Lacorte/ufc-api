const rankingService = require('../service/rankingService');

const createRankingsRecord = async (req,res) => {
  const rankingData = req.body;
  const { typeOfRanking } = req.params
  try {
    const response = await rankingService.createRankingRecord(rankingData, typeOfRanking);
    return res.status(201).json({ message: 'Ranking created successfully' });
  } catch (error) {
    console.log("error in createRankingRecord", error);
    return res.status(500).json({ message: "Internal server error" })
  }
}

const getDivisionRankings = async (req, res) => {
  const { division } = req.params

  try {
    const response = await rankingService.getDivisionRankings(division);
    return res.status(201).json(response);
  } catch (error) {
    console.log("error in getDivisionRankings", error);
    return res.status(500).json({ message: "Internal server error" })
  }
};

const getCurrentFighterRankingsRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await rankingService.getCurrentFighterRankingsRecord(id);
    if (!response) {
      return res.status(404).json({ message: 'Ranking record not found'});
    };
    return res.status(201).json(response);
  } catch (error) {
  }
};

const getP4pRankings = async (req, res) => {
  try {
    const response = await rankingService.getP4pRankings();
    if(!response) {
        return res.status(404).json({ message: 'Ranking records not found'})
    }
    return res.status(201).json(response)
  } catch (error) {
      console.log("error in getP4pRankings", error);
      return res.status(500).json({ message: "Internal server error" })
  }
};

const deleteRanking = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await rankingService.deleteRankings(id);
    if(!response) {
        return res.status(201).json({ message: 'Ranking record not found'})
    }
    return res.status(201).json(response)
  } catch (error) {
      console.log("error in deleteRankings", error);
      return res.status(500).json({ message: "Internal server error" })
  }
};

module.exports = { 
    getDivisionRankings,
    getP4pRankings,
    getCurrentFighterRankingsRecord,
    createRankingsRecord,
    deleteRanking
};