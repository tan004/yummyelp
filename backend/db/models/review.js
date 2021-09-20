'use strict';

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      unique: true,
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    businessId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      allowNull: false,
      type:DataTypes.DECIMAL(2,1),
      validate:{
        min: 0,
        max: 5,
      }
    },
    answer: {
      allowNull: false,
      type:DataTypes.TEXT
    },
    liked: {
      type:DataTypes.BOOLEAN
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey:'userId'});
    Review.belongsTo(models.Business, {foreignKey:'businessId'});

  };
  return Review;
};
