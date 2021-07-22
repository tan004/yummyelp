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
          userId: 6,
          businessId: 2,
          rating: 4,
          answer: `Cool spot for an interesting Japanese dining experience! There are a bunch of booths where you and your party can sit inside with shoes off. The tables are set up so that you can sit on your knees at the table; I assume this is a Japanese sitting style. There's a hole under the table so you can also sit like normal if you wish.`,
          liked: true,
        },
        {
          userId: 5,
          businessId: 2,
          rating: 5,
          answer: `It has been more than 5 years since last visited, the menu has changed somewhat, gone were the weekly exotic meats (e.g. peacock).  Still we found the yakitori excellent and the service super friendly.`,
          liked: true,
        },
        {
          userId: 3,
          businessId: 1,
          rating: 4,
          answer: `The green pepper sauce is really good!.  Service was good, place is very clean n neat with both outdoor and indoor dinning.   Thank You MuMu for coming to FC, we don't have to drive to 3rd SM anymore. We'll be back soon!`,
          liked: true,
        },
        {
          userId: 3,
          businessId: 2,
          rating: 5,
          answer: 'This is super good! You have to give it a try!',
          liked: true,
        },
        {
          userId: 8,
          businessId: 10,
          rating: 4.5,
          answer: 'A good Chinese restaurant in the heart of Chinatown. We passed by a day before coming here after eating at a different Chinese restaurant and it was packed with people, so we decided to give it a try the following day.',
          liked: true,
        },
        {
          userId: 7,
          businessId: 10,
          rating: 3.5,
          answer: `Z and Y restaurant is located on Jackson Street in Chinatown in San Francisco, CA . They are known for authentic Szechuan cuisine that is delicious and fresh. I seriously loved all of their vegetarian dishes because they were so delicious! I have gotten their eggplant w/garlic sauce, Mapo tofu, bean jello red chili, stir fried Chinese cabbage with chili pepper, sesame bamboo shots, preserved eggs, and fried rice with no shrimp. I have to say this would have to be my new favorite restaurant in Chinatown!`,
          liked: true,
        },
        {
          userId: 4,
          businessId: 5,
          rating: 5,
          answer: `Super fresh fish, and warning: Reservations highly recommended. Service was friendly.`,
          liked: true,
        },
        {
          userId: 5,
          businessId: 6,
          rating: 5,
          answer: 'This is super good! You have to give it a try!',
          liked: true,
        },
        {
          userId: 3,
          businessId: 6,
          rating: 3,
          answer: `visited Fuji recently indoors and I was a bit disappointed by the freshness of the fish. We got some nigiris and they lacked firmness. The cooked salmon skin hand roll was good, but not sure about the other with raw fish. Not sure if I would return again.`,
          liked: false,
        },
        {
          userId: 2,
          businessId: 8,
          rating: 5,
          answer: 'This is super good! You have to give it a try!',
          liked: true,
        },

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
