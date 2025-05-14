const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {}

    Fighter.init(
      {
        fullName: DataTypes.STRING,
        nickName: DataTypes.STRING,
        birthDate: DataTypes.DATEONLY,
        height: DataTypes.FLOAT,
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
        nationality: DataTypes.STRING,
        city: DataTypes.STRING,
        ranking: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Fighter',
        paranoid: true,
        indexes: [
          {
            unique: true,
            fields: ['division', 'ranking'],
            name: 'unique_ranking_per_division',
          },
        ],
      }
    )

  return Fighter
}