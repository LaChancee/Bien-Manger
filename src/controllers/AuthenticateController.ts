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
import { Permission } from "../models/Permission";
import { hashSync } from "bcrypt";

export class AuthenticateController extends CrudController {
  public async login(req: Request, res: Response): Promise<any> {
    //   const mail = req.body.mail;
    //   consthashSyncplainPassword = req.body.password;
    //   const user = await User.findOne({
    //     where: { mail: mail }, include: [Permission]
    //   });
    //   // const user = await User.findOne({
    //   //   attributes: ['id', 'lastname', ['role', 'idPermission']],
    //   //   where: { mail:mail },
    //   //   include: [{
    //   //     model: Permission
    //   //   }]
    //   // });
    const plainPassword = req.body.password;
    const mail = req.body.mail;

    const user = await User.findOne({
          where: { mail: mail }, include: Permission
        });
    if (user === null) {
      res.json("login invalide");
      return;
    }

    // const bMatch = await compare(plainPassword, user!.password);
    // if (!bMatch) {
    //   res.json("login invalide");
    //   return;
    // }

     const permissions = await Permission.findByPk(user.idPermission);
    if (permissions === null) {
      res.status(status.UNAUTHORIZED).json("invalid credantials");
      return;
    }

    res.json({
      token: generateToken(user.lastname, user.mail, permissions.role),
    });
  }

  /**
   * signin
   */
  public async signin(req: Request, res: Response): Promise<void> {
    let userInfo = req.body;
    userInfo.password = await hash(userInfo.password, BCRYPT_ROUND);
    User.create(req.body)
      .then((user) => {
        let name = user.lastname;
        let msg = "l'utilisateur  " + name + " a été ajouté";
        res.json({ "message ": msg });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "insertion impossible" });
      });
  }

  public create(req: Request, res: Response): void {}
  public async read(req: Request, res: Response): Promise<void> {}
  update(req: Request, res: Response): void {}
  delete(req: Request, res: Response): void {}
}
