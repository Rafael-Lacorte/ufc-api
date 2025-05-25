'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fights',
      [
        //Charles vs Chandler 2024
        {
          eventId: 2,
          fighterA: 1,
          fighterB: 13,
          winnerId: 1,
          result: 'Decision - Unanimous',
          round: 5,
          endMinute: 5,
          endSecond: 0,
          isTitleFight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Charles vs Gaethje
        {
          eventId: 12,
          fighterA: 1,
          fighterB: 12,
          winnerId: 1,
          result: 'Submission',
          round: 1,
          endMinute: 3,
          endSecond: 22,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Charles vs  Poirier
        {
          eventId: 13,
          fighterA: 1,
          fighterB: 11,
          winnerId: 1,
          result: 'Submission',
          round: 3,
          endMinute: 1,
          endSecond: 2,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Charles vs Chandler 2021
        {
          eventId: 15,
          fighterA: 1,
          fighterB: 13,
          winnerId: 1,
          result: 'KO/TKO',
          round: 2,
          endMinute: 0,
          endSecond: 19,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Charles vs Ferguson
        {
          eventId: 16,
          fighterA: 1,
          fighterB: 14,
          winnerId: 1,
          result: 'Decision - Unanimous',
          round: 5,
          endMinute: 5,
          endSecond: 0,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
        //Islam vs Poirier
        {
          eventId: 6,
          fighterA: 11,
          fighterB: 15,
          winnerId: 15,
          result: 'Submission',
          round: 5,
          endMinute: 2,
          endSecond: 42,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
        // Poirier vs Gaethje 2
        {
          eventId: 9,
          fighterA: 11,
          fighterB: 12,
          winnerId: 12,
          result: 'KO/TKO',
          round: 2,
          endMinute: 1,
          endSecond: 0,
          isTitleFight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Poirier vs Chandler
        {
          eventId: 10,
          fighterA: 11,
          fighterB: 13,
          winnerId: 11,
          result: 'Submission',
          round: 3,
          endMinute: 2,
          endSecond: 0,
          isTitleFight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Gaethje vs Chandler
        {
          eventId: 14,
          fighterA: 12,
          fighterB: 13,
          winnerId: 12,
          result: 'Decision - Unanimous',
          round: 5,
          endMinute: 5,
          endSecond: 0,
          isTitleFight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pereira vs Roundtree
        {
          eventId: 4,
          fighterA: 2,
          fighterB: 9,
          winnerId: 2,
          result: 'KO/TKO',
          round: 4,
          endMinute: 4,
          endSecond: 32,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pereira vs Jiri 2
        {
          eventId: 5,
          fighterA: 2,
          fighterB: 6,
          winnerId: 2,
          result: 'KO/TKO',
          round: 2,
          endMinute: 0,
          endSecond: 13,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pereira vs Hill
        {
          eventId: 7,
          fighterA: 2,
          fighterB: 7,
          winnerId: 2,
          result: 'KO/TKO',
          round: 1,
          endMinute: 3,
          endSecond: 14,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Pereira vs Jiri
        {
          eventId: 8,
          fighterA: 2,
          fighterB: 6,
          winnerId: 2,
          result: 'KO/TKO',
          round: 2,
          endMinute: 4,
          endSecond: 8,
          isTitleFight: true,
          isTitleFight: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Pereira vs Blachowicz
        {
          eventId: 9,
          fighterA: 2,
          fighterB: 8,
          winnerId: 2,
          result: 'Decision - Split',
          round: 3,
          endMinute: 5,
          endSecond: 0,
          isTitleFight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fights', null, {})
  }
};
