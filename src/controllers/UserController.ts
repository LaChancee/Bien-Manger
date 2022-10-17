import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../database/database";
import { CrudController } from "./CrudController";
import { User } from "../models/User";

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.json({ message: "Insertion impossible" });
    });
  }

  public async read(req: Request, res: Response): Promise<void>{
    
  }

  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
}
