'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jobs = [
      {
        userId: 2,
        jobId: 1
      },
      {
        userId: 2,
        jobId: 2
      },
    ];
    await queryInterface.bulkInsert('usersJobs', jobs);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usersJobs', null, {});
  }
};
