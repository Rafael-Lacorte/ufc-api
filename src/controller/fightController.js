const fightService = require('../service/fightService');

const createFight = async (req, res) => {
    const fightData = req.body;
    try {
        const response = await fightService.createFight(fightData);
        return res.status(201).json(response);
    } catch(error) {
        if (error.isJoi) {
        return res.status(400).json({
          message: "Validation error",
          details: error.details.map(detail => detail.message)
        });
      }

        console.log("error in createFight", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const getFightById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fightService.getFightById(id);

        if (!response) {
            return res.status(404).json({ message: 'Fight not found'});
 
        }
        return res.status(200).json(response);

    } catch(error) {
        console.log("error in getFightById", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const getFightsByFighterId = async (req, res) => {
  const { fighterId } = req.params;

  try {
      const response = await fightService.getFightByFighterId(fighterId);
      if (!response) {
          return res.status(404).json({ message: 'Fights not found'});

      }
      return res.status(200).json(response);

  } catch(error) {
      console.log("error in getFightsByFighterId", error);
      return res.status(500).json({ message: "Internal server error"})
  }
};

const getFightsByEventId = async (req, res) => {
  const { eventId } = req.params;
  try {
    const response = await fightService.getFightsByEventId(eventId);
    if(!response) {
      return res.status(404).json({ message: "Fights not found"});
    }
    return res.status(200).json(response);
  } catch (error) {
    console.error('error on getFightsByEventId', error)
    return res.status(500).json({ message: "Interval server error"});
  }
};

const getFightsAndEventByFighter = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fightService.getFightsAndEventsByFighter(id);
    if(!response) {
      return res.status(404).json({ message: "X Fights not found X"});
    }
    return res.status(200).json(response);
  } catch (error) {
    console.error('error on getFightsAndEventsByFighter', error)
    return res.status(500).json({ message: "Interval server error"});
  }
}

const updateFight = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const [affectedRows] = await fightService.updateFight(id, newData);

        if (affectedRows == 0) {
            return res.status(404).json({ message: 'Fight not found or wrong field name'});
 
        }
        return res.status(204).json({message: 'Fight updated Successfully'});

    } catch(error) {
        if (error.isJoi) {
        return res.status(400).json({
          message: "Validation error",
          details: error.details.map(detail => detail.message)
        });
      }
      
        console.log("error in updateFight", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const deleteFight = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fightService.deleteFight(id);
        if(response == 0) {
            return res.status(404).json({ message: 'Fight not found or already deleted'});
        }
        return res.status(204).json({ message:"Fight Deleted"});

    } catch(error) {
        console.log("error in updateFight", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

module.exports = {
    createFight,
    getFightById,
    getFightsByFighterId,
    getFightsByEventId,
    getFightsAndEventByFighter,
    updateFight,
    deleteFight
}