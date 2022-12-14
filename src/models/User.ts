import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Permission } from "./Permission";

export class User extends Model {
  declare id: number;
  declare lastname: string;
  declare firstname: string;
  declare mail: string;
  declare password: string;
  declare idPermission: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // is: /^[0-9a-f]{64}$/i,
      },
    },
    idPermission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Permission,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
  }
);

User.belongsTo(Permission, { foreignKey: "idPermission" });
Permission.hasOne(User, { foreignKey: "idPermission" });



