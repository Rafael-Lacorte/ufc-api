'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rankings', [
      // Charles Oliveira - Lightweight #2
      {
        fighterId: 1,
        position: 2,
        type: 'division',
        division: 'Lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alex Pereira - Light Heavyweight #1
      {
        fighterId: 2,
        position: 1,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Khamzat Chimaev - Middleweight #3
      {
        fighterId: 4,
        position: 3,
        type: 'division',
        division: 'Middleweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Dominick Reyes - Light Heavyweight #8
      {
        fighterId: 5,
        position: 8,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jiri Prochazka - Light Heavyweight #2
      {
        fighterId: 6,
        position: 2,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jamahal Hill - Light Heavyweight #4
      {
        fighterId: 7,
        position: 4,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jan Blachowicz - Light Heavyweight #5
      {
        fighterId: 8,
        position: 5,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Khalil Rountree - Light Heavyweight #7
      {
        fighterId: 9,
        position: 7,
        type: 'division',
        division: 'Light Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tom Aspinall - Heavyweight #1
      {
        fighterId: 10,
        position: 1,
        type: 'division',
        division: 'Heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Dustin Poirier - Lightweight #5
      {
        fighterId: 11,
        position: 5,
        type: 'division',
        division: 'Lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Justin Gaethje - Lightweight #3
      {
        fighterId: 12,
        position: 3,
        type: 'division',
        division: 'Lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Michael Chandler - Lightweight #12
      {
        fighterId: 13,
        position: 12,
        type: 'division',
        division: 'Lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Islam Makhachev - Lightweight #0 (Champion)
      {
        fighterId: 15,
        position: 0,
        type: 'division',
        division: 'Lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alexander Volkanovski - Featherweight #0 (Champion)
      {
        fighterId: 16,
        position: 0,
        type: 'division',
        division: 'Featherweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Diego Lopes - Featherweight #2
      {
        fighterId: 17,
        position: 2,
        type: 'division',
        division: 'Featherweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Max Holloway - Lightweight #4
      {
        fighterId: 18,
        position: 4,
        type: 'division',
        division: 'Lightweight',
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
