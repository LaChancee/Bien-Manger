import { Sequelize } from "sequelize";


export const sequelize = new Sequelize( 'bien_mangerbdd', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});