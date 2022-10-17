"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const Recipe_1 = require("../models/Recipe");
const CrudController_1 = require("./CrudController");
class RecipeController extends CrudController_1.CrudController {
    create(req, res) {
        Recipe_1.Recipe.create(req.body)
            .then((recipe) => res.json(recipe))
            .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible" });
        });
    }
    async read(req, res) {
        Recipe_1.Recipe.findByPk(req.params.id)
            .then((recipe) => res.json(recipe))
            .catch((err) => {
            console.log(err);
            res.json("erreur");
        });
    }
    update(req, res) {
        let id = req.params.id;
        let recipeUpdate = req.body;
        Recipe_1.Recipe.findByPk(id)
            .then((recipe) => {
            if (recipe !== null) {
                recipe.set(recipeUpdate);
                recipe.save();
                res.json({ message: "recipe updated" });
            }
            else {
                res.json({ message: "recipe not found with id: " + id });
            }
        })
            .catch((err) => {
            console.log(err);
            res.json({ message: "Mise à jour impossible..." });
        });
    }
    delete(req, res) { }
}
exports.RecipeController = RecipeController;
