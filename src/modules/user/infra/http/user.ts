import { Router } from "express";
import { registerUserController } from "../../application/useCases/registerUser";
import { loginUserController } from "../../application/useCases/loginUser";

const userRoutes = Router();

userRoutes.post('/register', (req, res) => {
  registerUserController.exec(req, res)
});

userRoutes.post('/login', (req, res) => {
  loginUserController.exec(req, res)
});

export { userRoutes };