const { Op } = require('sequelize');
const { Event } = require('../models');

const createEvent = async (
    name,
    date,
    country,
    city,
    arena
) => {
    return Event.create(
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

const getUpComingEvents = async () => {
  const today = new Date();
  today.setHours(0,0,0,0);

  return await Event.findAll({
    where: {
      date: {
        [Op.gte]: today
      }
    },
    order: [['date', 'ASC']]
  });
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
    getUpComingEvents,
    updateEvent,
    deleteEvent
};