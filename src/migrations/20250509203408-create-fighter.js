'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Fighters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      division: {
        type: Sequelize.ENUM(
          'Heavyweight',
          'Light Heavyweight',
          'Middleweight',
          'Welterweight',
          'Lightweight',
          'Featherweight',
          'Bantamweight',
          'Flyweight'
        ),
        allowNull: false,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      wins: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      losses: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      ranking: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })

    await queryInterface.addConstraint('Fighters', {
      fields: ['division', 'ranking'],
      type: 'unique',
      name: 'unique_ranking_per_division',
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Fighters', 'unique_ranking_per_division');
    await queryInterface.dropTable('Fighters');
     
  }
};
