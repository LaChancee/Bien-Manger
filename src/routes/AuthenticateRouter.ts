import express, { Request, Response } from "express";
import { AuthenticateController } from "../controllers/AuthenticateController";
import * as Auth from "../middleware/authenticate";

const authenticateController = new AuthenticateController();
export const authenticateRouter = express.Router({
  strict: true,
});



authenticateRouter.route('/signin').post(authenticateController.signin);
authenticateRouter.route('/login').post(authenticateController.login);