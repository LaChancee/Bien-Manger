import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../database/database";
import { Recipe } from "../models/Recipe";

import { CrudController } from "./CrudController";

export class RecipeController extends CrudController {
  public create(req: Request, res: Response): void {
    Recipe.create(req.body)
      .then((recipe) => res.json(recipe))
      .catch((err) => {
        console.log(err);
        res.json({ message: "Insertion impossible" });
      });
  }

  public async read(req: Request, res: Response): Promise<void> {
    Recipe.findByPk(req.params.id)
      .then((recipe) => res.json(recipe))
      .catch((err) => {
        console.log(err);
        res.json("erreur");
      });
  }

  update(req: Request, res: Response): void {
    let id = req.params.id;
    let recipeUpdate = req.body;
    Recipe.findByPk(id)
      .then((recipe) => {
        if (recipe !== null) {
          recipe.set(recipeUpdate);
          recipe.save();
          res.json({ message: "recipe updated" });
        } else {
          res.json({ message: "recipe not found with id: " + id });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Mise à jour impossible..." });
      });
  }
  
  delete(req: Request, res: Response): void {}
}
