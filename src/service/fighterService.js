const fighter = require('../models/fighter');

const createFighter = async (
    fullName,
    nickName,
    birthDate,
    height,
    division,
    nationality,
    city,
    ranking,
    champion
) => {
    return fighter.create(
        fullName,
        nickName,
        birthDate,
        height,
        division,
        nationality,
        city,
        ranking,
        champion
    )
}

const getFighterById = async (id) => {
    return fighter.findByPk(id);
}

const updateFighterById = async () => {

    return fighter.update(
    newData, { where: { id }})
};

const deleteFighter = async (id) => {
    fighter.destroy({ where: { id }});
}

module.exports = { 
    createFighter,
    getFighterById,
    updateFighterById,
    deleteFighter
};