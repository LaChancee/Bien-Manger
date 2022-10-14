"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const database_1 = require("../database/database");
const CrudController_1 = require("./CrudController");
class RecipeController extends CrudController_1.CrudController {
    create(req, res) { }
    read(req, res) {
        database_1.sequelize
            .authenticate()
            .then(() => {
            console.log('Connection established successfully.');
        })
            .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
        res.json({ message: 'boum boum  !' });
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.RecipeController = RecipeController;
;
