'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fights', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Events',
          key: 'id'
        } 
      },
      fighterA: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fighters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull:false
      },
      fighterB: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fighters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull:false,
      },
      winnerId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fighters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull:true,
      },
      result: {
        type: Sequelize.ENUM(
          'KO/TKO',
          'Submission',
          'Decision - Unanimous',
          'Decision - Split',
          'No Contest',
          'DQ'
        ),
        allowNull:false
      },
      round: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endMinute: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      endSecond: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isTitleFight: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fights');
  }
};