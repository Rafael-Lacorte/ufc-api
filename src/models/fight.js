const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fight.belongsTo(models.Fighter, { foreignKey: 'fighterA'});
      Fight.belongsTo(models.Fighter, { foreignKey: 'fighterB'});
      Fight.belongsTo(models.Fighter, { foreignKey: 'winner'});

      Fight.belongsTo(models.Event, { foreignKey: 'eventId'});
    }
  }
  Fight.init({
    eventId: DataTypes.INTEGER,
    fighterA: DataTypes.INTEGER,
    fighterB: DataTypes.INTEGER,
    winnerId: DataTypes.INTEGER,
    result: DataTypes.ENUM(
      'KO/TKO',
      'Submission',
      'Decision - Unanimous',
      'Decision - Split',
      'No Contest',
      'DQ'
    ),
    round:{
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
    },
    endMinute: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 5 }
    },
    endSecond: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 59 }
    },
    isTitleFight: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Fight',
    paranoid: true
  });
  return Fight;
};