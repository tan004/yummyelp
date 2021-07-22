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
          title: 'Mumu hotpot',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/QY1Oz6tpz7f91L_syiUH-Q/o.jpg',
        description: `Our restaurant has been doing hotpot for over last many years in Sunnyvale and Foster City.
        We strive to offer our guests with the ultimate AYCE (all you can eat). Chinese and Vegetarian fusion dining
        experience that is truly unforgettable. our guests have the option of choosing many dishes!
        Mumu Hot Pot offers a kind dining experience unlike anywhere else.`,

        address: '1099 foster square ln',
        city: 'Foster City',
        state: 'California',
        zipCode: '94404',
        },
        {
          ownerId: 1,
          title: 'Mokutanya',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/QPpP7pP4CC20CfSVbkrDZw/o.jpg',
        description: `Mokutanya is a yakitori charcoal grill and ramen restaurant. From the moment you step into Mokutanya, our bubbly, cheerful hostess and friendly, attentive wait staff will instantly make you feel at ease and welcomed. At Mokutanya, we just don't want to treat you as a customer. We want to treat everyone as good friends where they can be frank with us and share their opinions. We listen to our friends, accept their suggestions and continuously strive on making improvement to make them happy. All we request is for you to kick back to enjoy everything we have to offer.`,
        address: '1155 California Dr ste G',
        city: 'Burlingame',
        state: 'California',
        zipCode: '94010',
        },
        {
          ownerId: 2,
          title: 'Liuyishou hotpot',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/Qp3HKahiznh_1Qt8mOGB_Q/o.jpg',
        description: 'Come try our authentic Chongqing Hotpot. In Liuyishou, you can always find a broth that fit you and the spicniness that you dream of!',
        address: '98 E 3rd ave',
        city: 'San Mateo',
        state: 'California',
        zipCode: '94401',
      },
        {
          ownerId: 3,
          title: 'Boiling hopot',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/pjd_QmBovdQljI-oUyefIA/o.jpg',
        description: `We are offering AYCE(ALL YOU CAN EAT) hotpot with only $29.98 per person.
         If you are looking for a place where you can drink and have fun with friends. Boiling hotpot is a good fit for you!`,
        address: '5512 geary blvd',
        city: 'San Francisco',
        state: 'California',
        zipCode: '94121',
        },

        {
          ownerId: 1,
          title: 'Sushi Maruyama',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/oc-U7SuXR4leIi6OVCDzvw/o.jpg',
        description: `We are authentic sushi restaurant in San Mateo. Fish comes from TSUKIJI market ,sushi rice is
        premium short grains.tossed seaweed,original mix blend soysauce,aging ponzu and A5 wagyu.`,
        address: '279 Baldwin Ave',
        city: 'San Mateo',
        state: 'California',
        zipCode: '94401',
        },
        {
          ownerId: 4,
          title: 'Fuji Sukiyaki',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/ELToW2WxccsawIEjyEsiyw/o.jpg',
        description: `Sushi, Nigiri, Sashimi, Rolls, Homemade Sukiyaki, Tempura! We are currently doing take-out and delivery through doordash and UberEat.
         We will open back for dine-in on June 15th 2020. Thanks for your supporting! `,
        address: '428 E 3rd Ave',
        city: 'San Mateo',
        state: 'California',
        zipCode: '94401',
        },
        {
          ownerId: 5,
          title: 'Espetus Churrascaria',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/qAP8_eFkdOcqybnaVGZmrQ/o.jpg',
        description: `Churrasco (shoo - ras - ko) has been a culinary tradition for more than three centuries in Rio Grande do Sul (Southern Brazil). In the olden days, "Gauchos" (Southern Brazilian Cowboys) pierced large pieces of meat and slowly roasted them over open flamed pits, while talking about their adventures on the plains. At Espetus Churrascaria, we have kept the Gaucho tradition alive. Prime cuts of meat are prepared over an open flame and served as they have been for centuries, preserving the individual taste of each tender cut. In November of 2008, Espetus opened its first sister restaurant in downtown San Mateo, bringing the Peninsula the authentic Southern Brazilian "churrascaria" experience.`,
        address: '710 S B st',
        city: 'San Mateo',
        state: 'California',
        zipCode: '94401',
        },
        {
          ownerId: 6,
          title: 'C Food Crush',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/adFElqZxBj3n4NtmjdGjFg/o.jpg',
        description: `Seafood, Cajun / Creole, Californian Fusion. We are OPEN for Outdoor Dining, Takeout & Delivery. Please visit our website "www.cfoodcrush.com" to place Online Orders, make Reservations and for most up to date information. Thank you for your support!`,
        address: '251 South B st',
        city: 'San Mateo',
        state: 'California',
        zipCode: '94401',
        },
        {
          ownerId: 1,
          title: 'Seoul Kalbi Korean BBQ',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/WSfzCtLB5XLaQygFzJ6GLg/o.jpg',
        description: `The Peninsula's Original Grill-At-Your-Table, All-You-Can-Eat, BBQ house, since 1991. Outdoor Patio
        Dining Now Available. Call for reservations. Also, check out our website for a special DIY KBBQ
        home grilling kit now on sale.`,
        address: '1610 El Camino Real',
        city: 'San Bruno',
        state: 'California',
        zipCode: '94066',
        },
        {
          ownerId: 2,
          title: 'Z & Y Restaurant',
        imgUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/khqJPA8hm1hZ_Ilpe5IssA/o.jpg',
        description: `Michelin recommended Z & Y Restaurant located in San Francisco Chinatown. Let's enjoy our popular Spicy Fish Fillet in Flaming Chili Oil, Tea Smoked Duck, Sliced Pork w/ Spicy Garlic Sauce, Beef Pancake when you dine outside or inside! Enjoy delicious, freshly made dishes from award-winning Z & Y Restaurant. Cheers! About Z & Y Restaurant: - Award-winning restaurant: Michelin Bib Gourmand, San Francisco Chronicle's Top 100 Bay Area Restaurant. - Recommended by influencers from the San Francisco Bay Area. - Chef Han was the executive chef at San Francisco's Consulate General of the People's Republic of China, and served several Presidents and dignitaries.`,
        address: '655 Jackson st',
        city: 'San Francisco',
        state: 'California',
        zipCode: '94133',
        },
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
