import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database"
import { Permission } from "./Permission";

export class User extends Model {
  public id!: number;
  public lastname!: string;
  public firstname?: string;
  public mail!: string;
  public password?: string;
  public idPermission!: number;
  
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
      allowNull: true,
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
