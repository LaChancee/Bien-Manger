"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const Recipe_1 = require("../models/Recipe");
const CrudController_1 = require("./CrudController");
class RecipeController extends CrudController_1.CrudController {
    create(req, res) {
    }
    async read(req, res) {
        Recipe_1.Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(err => { console.log(err); res.json("erreur"); });
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.RecipeController = RecipeController;
