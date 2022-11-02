import { compare, hash, hashSync } from "bcrypt";
import { create } from "domain";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { read, readFileSync } from "fs";
import { ParsedQs } from "qs";
import { generateToken } from "../authentification/jwt";
import { BCRYPT_ROUND } from "../config/constants";
import { sequelize } from "../database/database";
import { User } from "../models/User";
import { CrudController } from "./CrudController";
import { UserController } from "./UserController";
import { status } from "http-status";

export class AuthenticateController extends CrudController {

  public async login(req: Request, res: Response): Promise<any> {
    const mail = req.body.mail;
    const plainPassword = req.body.password;
    const user = await User.findOne({ where: { mail:mail } });
    
    if (user!) {
      res.status(status.UNAUTHORIZED).json({ message  : "Invalid credential" }); 
      return; 
    }
    const bMacth = await compare(plainPassword, user!.password);
    if (!bMacth) {
      res.status(status.UNAUTHORIZED).json({ message  : "Invalid credential" });
  }

  res.status(status.OK).json({'token' : generateToken()});
}
  /**
   * signin
   */
  public signin(req: Request, res: Response): void {
    let userInfo = req.body;
    hash(userInfo.password, BCRYPT_ROUND)
      .then((hashedPassword) => {
        userInfo.password = hashedPassword;
        User.create(userInfo)
          .then((user) => {
            let name = user.lastname;
            let msg = "L'utilisateur " + name + " a bien été ajouté.";
            res.json({ message: msg });
          })
          .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible." });
          });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Insertion impossible." });
      });
  }

  public create(req: Request, res: Response): void {}
  public async read(req: Request, res: Response): Promise<void> {}
  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
}
