const { Fighter } = require('../models');

const createFighter = async (
    fullName,
    nickName,
    birthDate,
    height,
    division,
    nationality,
    city,
    ranking,
) => {
    return Fighter.create(
        fullName,
        nickName,
        birthDate,
        height,
        division,
        nationality,
        city,
        ranking,
    )
}

const getFighterById = async (id) => {
    return await Fighter.findByPk(id);
}

const updateFighter = async (id, newData) => {

    return Fighter.update(newData, { where: { id } })
};

const deleteFighter = async (id) => {
    return Fighter.destroy({ where: { id }});
}

module.exports = { 
    createFighter,
    getFighterById,
    updateFighter,
    deleteFighter
};