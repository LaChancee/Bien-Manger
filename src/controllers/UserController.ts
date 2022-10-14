import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read } from "fs";
import { ParsedQs } from "qs";
import { sequelize } from "../database/database";
import { CrudController } from "./CrudController";
import { User } from "../models/User";

export class UserController extends CrudController {
  public async create(req: Request, res: Response): Promise<void> {
    const user = await User.create({
        lastname: 'alice123',
        firstname: 'alice',
        email: 'alice@example.com',
        password: 'password',
        idPermission: '1',
        
      }, { fields: ['username'] });
      // let's assume the default of isAdmin is false
      console.log(user.lastname); // 'alice123'
      console.log(user.idPermission); // false
  }

  public async read(req: Request, res: Response): Promise<void>{
    
  }

  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
}
