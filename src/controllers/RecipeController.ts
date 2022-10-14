import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../database/database";
import { Recipe } from '../models/Recipe';

import { CrudController } from "./CrudController";

export class RecipeController extends CrudController {
  create(req: Request, res: Response): void {
    
  }

  public async read(req: Request, res: Response): Promise<void>{
    Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(err => {console.log(err); res.json("erreur");});
  }

  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
}
