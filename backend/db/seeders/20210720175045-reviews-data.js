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
        {
          userId: 1,
          businessId: 3,
          rating: 4.5,
          answer: 'I am a big friend of this place!',
          liked: true,
        },
        {
          userId: 1,
          businessId: 4,
          rating: 5,
          answer: 'What a wonderful place, delicious!!!!! Planning to come back later already!',
          liked: true,
        },
        {
          userId: 3,
          businessId: 7,
          rating: 5,
          answer: `Wow what an experience!!! Super amazing welcoming staff !
          Beautiful location!
          I love the inside
          The service is amazing and sweet and attentive
          I love the food! And The service!
          They have the gentlemen who bringing meat around and after you are done you fill the little sign to red for stop no more and then green for more again :)
          Over all great experience 5 stars`,
          liked: true,
        },
        {
          userId: 3,
          businessId: 9,
          rating: 5,
          answer: `-Great customer service
          -Tasty food
          -good quality meats
          -Fresh veggies
          -Reasonably priced`,
          liked: true,
        },
        {
          userId: 4,
          businessId: 9,
          rating: 5,
          answer: `Today was lil disappointing.
          Last time when we were here was right after outdoor dinings started reopening. Everything was perfect as there were not many people.
          Today was different though. We had a server who was new, which was totally fine she was sweet and attentive. But our grill was weak and we needed more charcoal, and communicated literally with four different servers and they all said they would take a look soon but then ignored it. We finally managed to talk to this server who I remembered serving us last time as well (who was helping people being seated near the front door today) and she said she would make sure to tell them take a look and finally changed our charcoal - thanks to her!`,
          liked: true,
        },{
          userId: 4,
          businessId: 3,
          rating: 5,
          answer: `100% would come back. Food was great, prices were great, and service was great!!
          My favorite part was the little side bar they had where you could make your own dipping concoctions and also grab some side dishes such as seaweed salad and edamame! In addition to this, the presentation was very nice. As you can see in the pictures, they place the meats in a little circular platter that circles around the hotpot. My girlfriend and I got a tomato and spicy broth. The tomato was my favorite as it added an extremely nice flavor to the meats, which were already tasty to begin with!`,
          liked: true,
        },
        {
          userId: 5,
          businessId: 1,
          rating: 5,
          answer: `Yum yum yum! You won't leave here hungry. They have a delicious menu. We enjoy the combo meals. You choose your meat or vegetarian option and they bring it to you within 7 minutes! Tom yum and tomato broth are exceptional. Such a fun experience and I highly recommend. Expect to stay at least 1-1.5 hours.`,
          liked: true,
        },
        {
          userId: 7,
          businessId: 2,
          rating: 5,
          answer: `Wagyu beef was okay but not as tender as one might expect for "Wagyu".  Pork cheeks was okay but again less tender than we expected. Shushitou sweet chili pepper was good while the king oyster mushroom needed to be more charred and smoky.  Most skews consisted of 3 pieces of morsels, some consisted of 2 (e.g. unagi and black cod).  We ordered 13 yakitori for 2 and yet only felt half full. `,
          liked: true,
        },
        {
          userId: 5,
          businessId: 8,
          rating: 2,
          answer: `Sadly, this place was a miss for us. Okay option to have nearby, but nowhere near as good as Boiling Crab or The Boil in NYC. The sauce is so thin and runny that it's essentially a soup. Flavor was lacking, and the shrimp was overcooked. I'm really confused about why this place is so highly rated or popular. I'd rather go through the trouble of cooking at home than eat here again.`,
          liked: false,
        },
        {
          userId: 5,
          businessId: 4,
          rating: 5,
          answer: `I'd never been to hot pot before my experience here but it was absolutely amazing! I've heard of places offering 1-2 different broths but Boiling Hot Pot allowed us to pick 4 different broths!
          We were able to order everything we wanted from a tablet at the table and the staff did a great job of bringing it out quickly and accommodating any requests we had!
          This was a great experience and incredibly affordable when it comes to all you can eat! I hope to be back very soon!!`,
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
