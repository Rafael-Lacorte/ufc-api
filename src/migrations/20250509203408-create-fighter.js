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
      nickName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthDate: {
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
      draws: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
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
