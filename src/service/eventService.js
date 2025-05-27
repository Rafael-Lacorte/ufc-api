const { Event } = require('../models');

const createEvent = async (
    name,
    date,
    country,
    city,
    arena
) => {
    return Fighter.create(
        name,
        date,
        country,
        city,
        arena
    )
}

const getEventById = async (id) => {
    return await Event.findByPk(id);
}

const updateEvent = async (id, newData) => {
    return await Event.update(newData, { where: { id } })
};

const deleteEvent = async (id) => {
    return await Event.destroy({ where: { id }});
}

module.exports = { 
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent
};