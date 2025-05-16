const rankingService = require('../service/rankingService');

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

module.exports = { 
    getDivisionRankings,
}