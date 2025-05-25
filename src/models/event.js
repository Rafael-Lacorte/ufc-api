const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasMany(models.Fight, { foreignKey: 'eventId' })
    }
  }
  Event.init({
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    arena: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
    paranoid: true
  });
  return Event;
};