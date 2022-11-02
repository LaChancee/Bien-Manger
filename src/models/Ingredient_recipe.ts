import {Model, DataTypes} from 'sequelize'
import { UserController } from '../controllers/UserController';
import { sequelize } from "../database/database"
import { Ingredient } from './Ingredient';

export class Ingredient_recipe extends Model
{
    declare id: number;
    declare role: string;
}

Ingredient_recipe.init({
    idIngredient: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idRecipe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    qunatity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    sequelize,
    tableName: "ingredients_recipes",
    timestamps: false
});

