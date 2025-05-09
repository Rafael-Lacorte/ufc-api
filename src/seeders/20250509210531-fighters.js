'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Fighters', 
    [
      {
        fullName: 'Charles Oliveira',
        nickname: 'Do Bronx',
        birthdate: '1989-10-17',
        height: 1.78,
        nationality: 'Brazilian',
        city: 'Guarujá',
        ranking: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
