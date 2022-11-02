"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient_recipe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class Ingredient_recipe extends sequelize_1.Model {
}
exports.Ingredient_recipe = Ingredient_recipe;
Ingredient_recipe.init({
    idIngredient: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    idRecipe: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    qunatity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "ingredients_recipes",
    timestamps: false
});
