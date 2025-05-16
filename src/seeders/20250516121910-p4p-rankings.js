'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rankings', [
      // Charles Oliveira - #15
      {
        fighterId: 1,
        position: 15,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alex Pereira - #8
      {
        fighterId: 2,
        position: 8,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tom Aspinall - #11
      {
        fighterId: 10,
        position: 11,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Islam Makhachev - #1
      {
        fighterId: 15,
        position: 1,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alexander Volkanovski - #7 
      {
        fighterId: 16,
        position: 7,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Max Holloway - #12
      {
        fighterId: 18,
        position: 12,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Ilia Topuria - #3
      {
        fighterId: 3,
        position: 3,
        type: 'p4p',
        division: null,
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rankings', null, {});
  }
};
