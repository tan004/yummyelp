'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {
          email: 'demo@user.com',
          username: 'demo',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'demo1@user.com',
          username: 'demo1',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'demo2@user.com',
          username: 'demo2',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'yvonne@gmail.com',
          username: 'Yvonne',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'orlandoM@gmail.com',
          username: 'Orlando',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'chenaN@gmail.com',
          username: 'Chena',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'KristinN@gmail.com',
          username: 'Kristin',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'reinalee@gmail.com',
          username: 'Reina',
          hashedPassword: bcrypt.hashSync('password'),
        },
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
