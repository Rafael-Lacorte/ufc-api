const eventService = require('../service/eventService');

const createEvent = async (req, res) => {
    const eventData = req.body;
    try {
        const response = await eventService.createEvent(eventData);
        return res.status(201).json(response);
    } catch(error) {
        console.log("error in createEvent", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const getEventById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await eventService.getEventById(id);

        if (!response) {
            return res.status(404).json({ message: 'Event not found'});
 
        }
        return res.status(201).json(response);

    } catch(error) {
        console.log("error in getEventById", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const [affectedRows] = await eventService.updateEvent(id, newData);

        if (affectedRows == 0) {
            return res.status(404).json({ message: 'Event not found or wrong field name'});
 
        }
        return res.status(201).json({message: 'Event updated Successfully'});

    } catch(error) {
        console.log("error in updateEvent", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await eventService.deleteEvent(id);
        if(response == 0) {
            return res.status(404).json({ message: 'Event not found or already deleted'});
        }
        return res.status(201).json({ message:"Event Deleted"});

    } catch(error) {
        console.log("error in updateEvent", error);
        return res.status(500).json({ message: "Internal server error"})
    }
};



module.exports = {
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent
}