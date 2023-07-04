'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usersJobs', {
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      jobId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });
    await queryInterface.addConstraint('usersJobs', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_user_id',
      references: {
        table: 'users',
        field: 'id'
      }
    },
    {
      fields: ['jobId'],
      type: 'foreign key',
      name: 'FK_job_id',
      references: {
        table: 'jobs',
        field: 'id'
      }
    });
    await queryInterface.addIndex('usersJobs',
      ['userId', 'jobId'],
      {
        indicesType: 'UNIQUE',
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('usersJobs');
  },
};
