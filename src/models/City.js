const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const City = sequelize.define('cities',{
  name:{
    type: DataTypes.STRING
  },
  country:{
    type: DataTypes.STRING
  },
  isCapital:{
    type: DataTypes.BOOLEAN
  }
});

module.exports = City;