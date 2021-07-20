'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          businessId: 2,
          rating: 3,
          answer: 'this is okay!',
          liked: false,
        },
        {
          userId: 2,
          businessId: 3,
          rating: 4.5,
          answer: 'this is super good!',
          liked: true,
        },
        {
          userId: 3,
          businessId: 1,
          rating: 2,
          answer: 'this is not that tasty!!!!!!',
          liked: false,
        },
        {
          userId: 3,
          businessId: 2,
          rating: 3.5,
          answer: 'this is super good!',
          liked: true,
        },
        {
          userId: 2,
          businessId: 1,
          rating: 4.5,
          answer: 'I think this is super good!',
          liked: true,
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
