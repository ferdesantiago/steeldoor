'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jobs = [
      {
        company: 'Oracle',
        location: 'Remote',
        title: 'FE Developer',
        description: 'React FE developer',
        salary: '100k',
        skills: 'React, HTML, CSS',
        createdAt: new Date(),
      },
      {
        company: 'Amazon',
        location: 'Remote',
        title: 'BE Developer',
        description: 'Node.js BE developer',
        salary: '150k',
        skills: 'Node.js, Nest.js, MySQL',
        createdAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('jobs', jobs);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};
