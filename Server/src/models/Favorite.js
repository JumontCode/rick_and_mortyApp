const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Alive", "Dead", "unknown"],
        allowNull: false,
        defaultValue: "unknown",
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknown",
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Female", "Male", "Genderless", "unknown"],
        allowNull: false,
        defaultValue: "unknown",
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
