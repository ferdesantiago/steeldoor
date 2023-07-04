'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@gmail.com',
        password: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
        role: 'admin',
        createdAt: new Date(),
      },
      {
        firstName: 'user',
        lastName: 'user',
        email: 'user@gmail.com',
        password: '04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb',
        role: 'user',
        createdAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
