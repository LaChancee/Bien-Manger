import express, { Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import * as Auth from "../middleware/authenticate";

const userController = new UserController();
export const userRoute = express.Router({
  strict: true,
});



userRoute.route('/user/add').post(userController.create);