import express, { Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import * as Auth from "../middleware/authenticate";

const userController = new UserController();
export const route = express.Router({
  strict: true,
});



route.route('/user/add').post(userController.create);