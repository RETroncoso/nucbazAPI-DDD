import { OrderRepository } from "../../../infra/db/order.repo";
import { CreateOrderController } from "./CreateOrder.controller";
import { CreateOrderUseCase } from "./CreateOrder.uc";

const repository = new OrderRepository();
const useCase = new CreateOrderUseCase(repository);
const controller = new CreateOrderController(useCase);

export { controller as createOrderController, useCase as createOrderUseCase };