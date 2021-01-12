("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      models.Client.hasMany(Club, { foreignKey: "client_id" });
    }
  }
  Club.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
      client_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Club",
    }
  );
  return Club;
};
