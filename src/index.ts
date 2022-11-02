require("dotenv").config();

import cors, { CorsOptions } from "cors";
import { generateKey } from "crypto";
import express from "express";
import { generateToken } from "./authentification/jwt";
import { PORT } from "./config/constants";
import { router } from "./routes/Recipe";
import { userRoute } from "./routes/User";
import { authenticateRouter } from "./routes/AuthenticateRouter";


const app = express();
const allowedOrigins = ["http://localhost:8000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors());
app.use(express.json());

//Les routes
app.get("/recipe/show/:id", router);
app.post("/recipe/add", router);
app.put("/recipe/update/:id", router);
// users routes
app.post("/user/add", userRoute);
app.post("/signin", authenticateRouter);
app.post("/login", authenticateRouter);

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

if (process.env.NODE_ENV !== "production") {
  console.log(`Le token JWT:`, generateToken());
}

