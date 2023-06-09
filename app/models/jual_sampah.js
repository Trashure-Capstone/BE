"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jual_sampah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jual_sampah.belongsTo(models.status, {
        foreignKey: "id_status",
      });
      jual_sampah.belongsTo(models.user, {
        foreignKey: "id_user",
      });
      jual_sampah.belongsTo(models.sampah, {
        foreignKey: "id_sampah",
      });
    }
  }
  jual_sampah.init(
    {
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      id_sampah: DataTypes.INTEGER,
      berat_sampah: DataTypes.INTEGER,
      foto_sampah: DataTypes.STRING,
      tanggal_pengambilan: DataTypes.DATE,
      waktu: DataTypes.INTEGER,
      total_harga: DataTypes.INTEGER,
      id_status: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "jual_sampah",
    }
  );
  return jual_sampah;
};
