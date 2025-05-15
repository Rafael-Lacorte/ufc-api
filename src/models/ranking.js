const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ranking extends Model {
    static associate(models) {
      Ranking.belongsTo(models.Fighter, { foreignKey: 'fighterId' })
    }
  }

  Ranking.init(
    {
      fighterId: DataTypes.INTEGER,
      position: DataTypes.INTEGER,
      type: DataTypes.ENUM(
      'division',
      'p4p',
      ),
      division: DataTypes.ENUM(
        'Heavyweight',
        'Light Heavyweight',
        'Middleweight',
        'Welterweight',
        'Lightweight',
        'Featherweight',
        'Bantamweight',
        'Flyweight'
      ),
      isCurrent: DataTypes.BOOLEAN
    },
    {
    sequelize,
    modelName: 'Ranking',
    paranoid: true,
    indexes: [
        {
        unique: true,
        fields: ['type', 'division', 'ranking'],
        where: { isCurrent: true },
        name: 'unique_ranking_per_division_type',
        },
    ],
    }
  )
  return Ranking
}