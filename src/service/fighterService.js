const { Fighter } = require('../models');

const createFighter = async (
    fullName,
    nickName,
    birthDate,
    height,
    division,
    nationality,
    city,
    wins,
    losses,
    draws
) => {
    return Fighter.create(
        fullName,
        nickName,
        birthDate,
        height,
        division,
        nationality,
        city,
        wins,
        losses,
        draws
    )
}

const getFighterById = async (id) => {
    return await Fighter.findByPk(id);
}

const getAllFighters = async () => {
    return await Fighter.findAll();
}

const updateFighter = async (id, newData) => {

    return await Fighter.update(newData, { where: { id } })
};

const deleteFighter = async (id) => {
    return await Fighter.destroy({ where: { id }});
}

module.exports = { 
    createFighter,
    getFighterById,
    getAllFighters,
    updateFighter,
    deleteFighter
};