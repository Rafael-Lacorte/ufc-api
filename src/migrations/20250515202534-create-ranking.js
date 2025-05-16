'use strict';

const { ENUM, QueryError } = require('sequelize');
const { sequelize } = require('../models');

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
          'Heavyweight',
          'Light Heavyweight',
          'Middleweight',
          'Welterweight',
          'Lightweight',
          'Featherweight',
          'Bantamweight',
          'Flyweight'
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

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Rankings', 'unique_ranking_per_division_type');
    await queryInterface.dropTable('Rankings');
  }
};
