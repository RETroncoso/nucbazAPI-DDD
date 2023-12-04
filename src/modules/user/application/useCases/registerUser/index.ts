import { UserRepository } from "../../../infra/db/user.repo";
import { RegisterUserController } from "./RegisterUser.controller";
import { RegisterUserUseCase } from "./RegisterUser.uc";

const repository = new UserRepository();
const useCase = new RegisterUserUseCase(repository);
const controller = new RegisterUserController(useCase);

export { controller as registerUserController, useCase as registerUserUseCase };