const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Event.init({
    eventId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    fighterA: DataTypes.INTEGER,
    fighterB: DataTypes.INTEGER,
    winnerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};