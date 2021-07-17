'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Businesses', [
        {
          ownerId: 1,
          title: 'hotpot1',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/QY1Oz6tpz7f91L_syiUH-Q/o.jpg',
        description: 'this is a demo description',
        address: '123 hotpot street',
        city: 'san francisco',
        state: 'ca',
        zipCode: '94011',
        },
        {
          ownerId: 2,
          title: 'hotpot2',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/xKaXHOTfFgH9Don6nCOwFw/o.jpg',
        description: 'this is a demo description',
        address: '456 hotpot street',
        city: 'san francisco',
        state: 'ca',
        zipCode: '94013',
        },
        {
          ownerId: 3,
          title: 'hotpot3',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/49knCFQT7D0qWmbdRJvzWw/o.jpg',
        description: 'this is a demo description',
        address: '789 hotpot street',
        city: 'san francisco',
        state: 'ca',
        zipCode: '94012',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
