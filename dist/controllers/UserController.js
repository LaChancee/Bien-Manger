"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const CrudController_1 = require("./CrudController");
const User_1 = require("../models/User");
class UserController extends CrudController_1.CrudController {
    async create(req, res) {
        const user = await User_1.User.create({
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
    async read(req, res) {
    }
    update(req, res) { }
    delete(req, res) { }
}
exports.UserController = UserController;
