const rankingService = require('../service/rankingService');

const createRankingsRecord = async (req,res) => {
  const rankingData = req.body;

  try {
    const response = await rankingService.createRankingsRecord(rankingData);
    return res.status(201).json(response);
  } catch (error) {
    console.log("error in createFighter", error);
    return res.status(500).json({ message: "Internal server error" })
  }
}

const getDivisionRankings = async (req, res) => {
  const { division } = req.params

  try {
    const response = await rankingService.getDivisionRankings(division);
    return res.status(201).json(response);
  } catch (error) {
    console.log("error in createFighter", error);
    return res.status(500).json({ message: "Internal server error" })
  }
};

const getP4pRankings = async () => {
  try {
    const response = await rankingService.getP4pRankings();
    if(!response) {
        return res.status(201).json({ message: 'Ranking record not found'})
    }
    return res.status(201).json(response)
  } catch (error) {
      console.log("error in getFighterById", error);
      return res.status(500).json({ message: "Internal server error" })
  }
}
const deleteRanking = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await rankingService.deleteRankings(id);
    if(!response) {
        return res.status(201).json({ message: 'Ranking record not found'})
    }
    return res.status(201).json(response)
  } catch (error) {
      console.log("error in getFighterById", error);
      return res.status(500).json({ message: "Internal server error" })
  }
}

module.exports = { 
    getDivisionRankings,
    getP4pRankings,
    createRankingsRecord,
    deleteRanking

}