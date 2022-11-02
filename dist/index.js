"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const jwt_1 = require("./authentification/jwt");
const constants_1 = require("./config/constants");
const Recipe_1 = require("./routes/Recipe");
const User_1 = require("./routes/User");
const AuthenticateRouter_1 = require("./routes/AuthenticateRouter");
const IngredientRouter_1 = require("./routes/IngredientRouter");
const app = (0, express_1.default)();
const allowedOrigins = ["http://localhost:8000"];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Les routes
app.get("/recipe/show/:id", Recipe_1.router);
app.post("/recipe/add", Recipe_1.router);
app.put("/recipe/update/:id", Recipe_1.router);
// users routes
app.post("/user/add", User_1.userRoute);
app.post("/signin", AuthenticateRouter_1.authenticateRouter);
app.post("/login", AuthenticateRouter_1.authenticateRouter);
// Les ingrédients 
app.get("/ingredient/show/:id", IngredientRouter_1.ingredientRouter);
app.get("/", (req, res) => res.send("Hello world"));
app.listen(constants_1.PORT, () => {
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
if (process.env.NODE_ENV !== "production") {
    console.log(`Le token JWT:`, (0, jwt_1.generateToken)("miharisoa", "miharisoababef@gmail.com", "administrateur"));
}
