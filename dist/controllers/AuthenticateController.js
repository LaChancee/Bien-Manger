"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authentification/jwt");
const constants_1 = require("../config/constants");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
const http_status_1 = require("http-status");
class AuthenticateController extends CrudController_1.CrudController {
    async login(req, res) {
        const mail = req.body.mail;
        const plainPassword = req.body.password;
        const user = await User_1.User.findOne({ where: { mail: mail } });
        if (user) {
            res.status(http_status_1.status.UNAUTHORIZED).json({ message: "Invalid credential" });
            return;
        }
        const bMacth = await (0, bcrypt_1.compare)(plainPassword, user.password);
        if (!bMacth) {
            res.status(http_status_1.status.UNAUTHORIZED).json({ message: "Invalid credential" });
        }
        res.status(http_status_1.status.OK).json({ 'token': (0, jwt_1.generateToken)() });
    }
    /**
     * signin
     */
    signin(req, res) {
        let userInfo = req.body;
        (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND)
            .then((hashedPassword) => {
            userInfo.password = hashedPassword;
            User_1.User.create(userInfo)
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
    create(req, res) { }
    async read(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.AuthenticateController = AuthenticateController;
