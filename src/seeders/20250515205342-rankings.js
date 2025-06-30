'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rankings', [
      // Charles Oliveira - lightweight #2
      {
        fighterId: 1,
        position: 2,
        type: 'division',
        division: 'lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alex Pereira - lightheavyweight #1
      {
        fighterId: 2,
        position: 1,
        type: 'division',
        division: 'light_heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Khamzat Chimaev - middleweight #3
      {
        fighterId: 4,
        position: 3,
        type: 'division',
        division: 'middleweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Dominick Reyes - lightheavyweight #8
      {
        fighterId: 5,
        position: 8,
        type: 'division',
        division: 'lightheavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jiri Prochazka - lightheavyweight #2
      {
        fighterId: 6,
        position: 2,
        type: 'division',
        division: 'lightheavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jamahal Hill - lightheavyweight #4
      {
        fighterId: 7,
        position: 4,
        type: 'division',
        division: 'lightheavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Jan Blachowicz - lightheavyweight #5
      {
        fighterId: 8,
        position: 5,
        type: 'division',
        division: 'lightheavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Khalil Rountree - lightheavyweight #7
      {
        fighterId: 9,
        position: 7,
        type: 'division',
        division: 'lightheavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tom Aspinall - heavyweight #1
      {
        fighterId: 10,
        position: 1,
        type: 'division',
        division: 'heavyweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Dustin Poirier - lightweight #5
      {
        fighterId: 11,
        position: 5,
        type: 'division',
        division: 'lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Justin Gaethje - lightweight #3
      {
        fighterId: 12,
        position: 3,
        type: 'division',
        division: 'lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Michael Chandler - lightweight #12
      {
        fighterId: 13,
        position: 12,
        type: 'division',
        division: 'lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Islam Makhachev - lightweight #0 (Champion)
      {
        fighterId: 15,
        position: 0,
        type: 'division',
        division: 'lightweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Alexander Volkanovski - featherweight #0 (Champion)
      {
        fighterId: 16,
        position: 0,
        type: 'division',
        division: 'featherweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Diego Lopes - featherweight #2
      {
        fighterId: 17,
        position: 2,
        type: 'division',
        division: 'featherweight',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Max Holloway - lightweight #4
      {
        fighterId: 18,
        position: 4,
        type: 'division',
        division: 'lightweight',
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
