"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sampah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sampah.hasMany(models.jual_sampah, {
        foreignKey: "id_sampah",
      });
    }
  }
  sampah.init(
    {
      nama: DataTypes.STRING,
      nama_detail: DataTypes.STRING,
      price: DataTypes.INTEGER,
      manfaat: DataTypes.TEXT,
      kekurangan: DataTypes.TEXT,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sampah",
    }
  );
  return sampah;
};
