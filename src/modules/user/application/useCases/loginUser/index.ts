import { UserRepository } from "../../../infra/db/user.repo";
import { AuthService } from "../../../services/impl/auth.service";
import { LoginUserController } from "./LoginUser.controller";
import { LoginUserUseCase } from "./LoginUser.uc";

const userRepository = new UserRepository();
const authservice = new AuthService();
const useCase = new LoginUserUseCase(userRepository, authservice);
const controller = new LoginUserController(useCase);

export { controller as loginUserController, useCase as loginUserUseCase };