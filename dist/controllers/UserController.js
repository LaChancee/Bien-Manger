"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const CrudController_1 = require("./CrudController");
const User_1 = require("../models/User");
class UserController extends CrudController_1.CrudController {
    create(req, res) {
        User_1.User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
            console.log(err);
            res.json({ message: "Insertion impossible" });
        });
    }
    async read(req, res) {
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.UserController = UserController;
