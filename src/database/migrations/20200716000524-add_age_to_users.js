'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('users','age',{
     type: Sequelize.INTEGER
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users','age')
  }
};
