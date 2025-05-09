const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./index');


class Fighter extends Model {

}

  Fighter.init(
    {
      fullName: DataTypes.STRING,
      nickname: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
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
      champion: DataTypes.BOOLEAN
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

module.exports = Fighter;