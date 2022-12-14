"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Permission_1 = require("./Permission");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    mail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
        // is: /^[0-9a-f]{64}$/i,
        },
    },
    idPermission: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission_1.Permission,
            key: "id",
        },
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "users",
    timestamps: false,
});
User.belongsTo(Permission_1.Permission, { foreignKey: "idPermission" });
Permission_1.Permission.hasOne(User, { foreignKey: "idPermission" });
