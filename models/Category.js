const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    id: {
      // define columns
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },

    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
