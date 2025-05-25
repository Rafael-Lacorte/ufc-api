'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', 
      [
        // 1
        {
          name: 'UFC 310: Pantoja x Asakura',
          date: '2024-12-07',
          country: 'United States',
          city: 'Las Vegas',
          arena: 'T-Mobile Arena',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 2
        {
          name: 'UFC 309: Jones vs. Miocic',
          date: '2024-11-16',
          country: 'United States',
          city: 'New York',
          arena: 'Madison Square Garden',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 3
        {
          name: 'UFC 308: Topuria x Holloway',
          date: '2024-10-26',
          country: 'United Arab Emirates',
          city: 'Abu Dhabi',
          arena: 'Etihad Arena',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 4
        {
          name: 'UFC 307: Pereira x Rountree Jr',
          date: '2024-10-05',
          country: 'United States',
          city: 'Salt Lake City',
          arena: 'Delta Center',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 5
        {
          name: 'UFC 303: Pereira x Prochazka 2',
          date: '2024-06-29',
          country: 'United States',
          city: 'Las Vegas',
          arena: 'T-Mobile Arena',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 6
        {
          name: 'UFC 302: Makhachev vs. Poirier',
          date: '2024-06-01',
          country: 'United States',
          city: 'Newark',
          arena: 'Prudential Center',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 7
        {
          name: 'UFC 300: Pereira x Hill',   
          date: '2024-04-13',
          country: 'United States',
          city: 'Las Vegas',
          arena: 'T-Mobile Arena',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 8
        {
          name: 'UFC 295: Procházka x Pereira',
          date: '2023-11-11',
          country: 'United States',
          city: 'New York',
          arena: 'Madison Square Garden',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 9
        {
          name: 'UFC 291: Poirier vs. Gaethje 2',
          date: '2023-07-29',
          country: 'United States',
          city: 'Salt Lake City',
          arena: 'Delta Center',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //10
        {
          name: "UFC 281: Adesanya vs. Pereira",
          date: "2022-11-12",
          country: 'United States',
          city: 'New York',
          arena: 'Madison Square Garden',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 11
        {
          name: "UFC 280: Oliveira vs Makhachev",
          date: "2022-10-22",
          country: "United Arab Emirates",
          city: "Abu Dhabi",
          arena: "Etihad Arena",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 12
        {
          name: "UFC 274: Oliveira vs. Gaethje",
          date: "2022-05-07",
          country: "United States",
          city: "Phoenix",
          arena: "Footprint Center",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 13
        {
          name: "UFC 269: Oliveira vs. Poirier",
          date: "2021-12-11",
          country: "United States",
          city: "Las Vegas",
          arena: "T-Mobile Arena",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 14
        {
          name: "UFC 268: Usman vs. Covington 2",
          date: "2021-11-06",
          country: "United States",
          city: 'New York',
          arena: 'Madison Square Garden',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 15
        {
          name: "UFC 262: Oliveira vs. Chandler",
          date: "2021-05-15",
          country: "United States",
          city: "Houston",
          arena: "Toyota Center",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // 16
        {
          name: "UFC 256: Figueiredo vs. Moreno",
          date: "2020-12-12",
          country: "United States",
          city: "Las Vegas",
          arena: "UFC APEX",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {})
  }
};
