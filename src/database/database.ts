import { Sequelize } from "sequelize";


export const sequelize = new Sequelize( 'bien_mangerbd', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});