const fighterService = require('../service/fighterService');

const createFighter = async (req, res) => {
    const fighterData = req.body;
    const response = await fighterService.createFighter(fighterData);
    return res.status(201).json(response);

};

const getFighterById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fighterService.getFighterById(id);

        if (!response) {
            return res.status(404).json({ message: 'Fighter not found'});
 
        }
        return res.status(201).json(response);

    } catch(error) {
        // console.log("error in getFighterById", error);
        return res.status(500).json({ message: "internal server error"})
    }

};



module.exports = {
    createFighter,
    getFighterById,
}