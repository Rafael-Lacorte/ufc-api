const { Fighter } = require('../models');
const { fighterSchema, updateFighterSchema } = require('./validation/fighterSchemas');

const createFighter = async (fighterData) => {
  try {
    const validated = await fighterSchema.validateAsync(fighterData, { abortEarly: false });
    return Fighter.create(validated)
  } catch (error) {
    console.log("Validation error:", error.details?.[0]?.message || error.message );
    throw error;
  }
}

const getFighterById = async (id) => {
  return await Fighter.findByPk(id, { where: { deletedAt: null } });
}

const getAllFighters = async () => {
  return await Fighter.findAll({ where: { deletedAt: null } });
}

const updateFighter = async (id, newData) => {
  try {
    await updateFighterSchema.validateAsync(newData);
    return await Fighter.update(newData, { where: { id } })
    
  } catch (error) {
    console.log("Validation error:", error.details?.[0]?.message || error.message );
    throw error;
  }
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