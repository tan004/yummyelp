'use strict';
const { validator } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 6]
      }
    },
    lat: {
      type: DataTypes.DECIMAL,

    },
    lng: {
      type: DataTypes.DECIMAL,

    }
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, { foreignKey: 'ownerId'});
    Business.hasMany(models.Review, { foreignKey: 'businessId', onDelete: 'cascade', hooks: true})
  };
  return Business;
};
