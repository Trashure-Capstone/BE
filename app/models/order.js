'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    status: DataTypes.STRING,
    berat_sampah: DataTypes.INTEGER,
    id_sampah: DataTypes.INTEGER,
    tanggal_pengambilan: DataTypes.DATE,
    waktu: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};