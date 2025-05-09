const { Sequelize, DataTypes, Model } = require('sequelize');

class Fighter extends Model {

}

  Fighter.init(
    {
      fullName: DataTypes.STRING,
      nickname: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      height: DataTypes.FLOAT,
      nationality: DataTypes.STRING,
      city: DataTypes.STRING,
      ranking: DataTypes.INTEGER,
      champion: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Fighter',
      paranoid: true
    }
  )

module.exports = Fighter;