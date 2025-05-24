const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    static associate(models) {
      Fighter.hasMany(models.Ranking, { foreignKey: 'fighterId' });
      
      Fighter.hasMany(models.Fight, { foreignKey: 'fighterA' });
      Fighter.hasMany(models.Fight, { foreignKey: 'fighterB' });
      Fighter.hasMany(models.Fight, { foreignKey: 'winner' });

    }
  }

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
        wins: DataTypes.INTEGER,
        losses: DataTypes.INTEGER,
        draws: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Fighter',
        paranoid: true,
      }
    )
  return Fighter
}