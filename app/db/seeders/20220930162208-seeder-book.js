'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'David Bach: Faktor Latte',
        author: 'David Bach',
        image: '/uploads/image 1.png',
        publish: new Date(),
        price: 90,
        stock: 100,
        user: 6,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '"Selena" dan "Nebula"',
        author: 'TERE LIYE',
        image: '/uploads/image 2.png',
        publish: new Date(),
        price: 90,
        stock: 100,
        user: 6,
        category: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
