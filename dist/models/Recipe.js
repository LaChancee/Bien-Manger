"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Course_1 = require("./Course");
const User_1 = require("./User");
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
Recipe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    guests: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idCourse: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course_1.Course,
            key: "id",
        },
    },
    idUser: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User_1.User,
            key: "id",
        },
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "recipes",
    createdAt: "created_At",
    updatedAt: "updated_At",
});
Recipe.belongsTo(Course_1.Course, { foreignKey: "idCourse" });
Recipe.belongsTo(User_1.User, { foreignKey: "idUser" });
Course_1.Course.hasOne(Recipe, { foreignKey: "idCourse" });
User_1.User.hasOne(Recipe, { foreignKey: "idUser" });
