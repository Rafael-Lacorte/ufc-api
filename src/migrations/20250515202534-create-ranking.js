'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Rankings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fighterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Fighters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM('p4p', 'division'),
        allowNull:false
      },
      division: {
        type: Sequelize.ENUM(
          'heavyweight',
          'light_heavyweight',
          'middleweight',
          'welterweight',
          'lightweight',
          'featherweight',
          'bantamweight',
          'flyweight'
        ),
        allowNull: true,
      },
      isCurrent: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
      }
    });

    await queryInterface.addConstraint('Rankings', {
      fields: ['type', 'division', 'position'],
      type: 'unique',
      where: { isCurrent: true },
      name: 'unique_ranking_per_division_type',
        
    })
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Rankings', 'unique_ranking_per_division_type');
    await queryInterface.dropTable('Rankings');
  }
};
