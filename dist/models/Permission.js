"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
//import { User } from './User';
class Permission extends sequelize_1.Model {
}
exports.Permission = Permission;
Permission.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    menu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "courses",
    timestamps: false
});
