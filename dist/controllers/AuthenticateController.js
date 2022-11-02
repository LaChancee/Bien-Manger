"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authentification/jwt");
const constants_1 = require("../config/constants");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
const http_status_1 = require("http-status");
const Permission_1 = require("../models/Permission");
class AuthenticateController extends CrudController_1.CrudController {
    async login(req, res) {
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
        const user = await User_1.User.findOne({
            where: { mail: mail }, include: Permission_1.Permission
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
        const permissions = await Permission_1.Permission.findByPk(user.idPermission);
        if (permissions === null) {
            res.status(http_status_1.status.UNAUTHORIZED).json("invalid credantials");
            return;
        }
        res.json({
            token: (0, jwt_1.generateToken)(user.lastname, user.mail, permissions.role),
        });
    }
    /**
     * signin
     */
    async signin(req, res) {
        let userInfo = req.body;
        userInfo.password = await (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND);
        User_1.User.create(req.body)
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
    create(req, res) { }
    async read(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.AuthenticateController = AuthenticateController;
