import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../database/database";
import { CrudController } from "./CrudController";


export class RecipeController extends CrudController {
  create(req: Request, res: Response): void {}
  
  public read(req: Request, res: Response): void {
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection established successfully.');
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err);
    })
    res.json({message:'boum boum  !' });
  }

  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
};
