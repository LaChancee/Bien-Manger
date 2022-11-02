"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRouter = void 0;
const express_1 = __importDefault(require("express"));
const AuthenticateController_1 = require("../controllers/AuthenticateController");
const authenticateController = new AuthenticateController_1.AuthenticateController();
exports.authenticateRouter = express_1.default.Router({
    strict: true,
});
exports.authenticateRouter.route('/signin').post(authenticateController.signin);
exports.authenticateRouter.route('/login').post(authenticateController.login);
