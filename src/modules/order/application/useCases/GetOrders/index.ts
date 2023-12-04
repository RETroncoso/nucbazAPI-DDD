import { OrderRepository } from "../../../infra/db/order.repo";
import { GetOrdenesController } from "./GetOrdenes.controller";
import { GetOrdenesUseCase } from "./GetOrdenes.uc";

const repository = new OrderRepository();
const useCase = new GetOrdenesUseCase(repository);
const controller = new GetOrdenesController(useCase);

export { controller as getOrdenesController, useCase as getOrdenesUseCase };