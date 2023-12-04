import { Router } from "express";
import { middlewares } from "../../../../shared/infra/http";
import { createOrderController } from "../../application/useCases/CreateOrder";
import { getOrdenesController } from "../../application/useCases/GetOrders";

const orderRoutes = Router();

orderRoutes.get('/',
	  (req, res, next) => middlewares.checkToken(req, res, next),
	  (req, res) => getOrdenesController.exec(req, res)
);

orderRoutes.post('/',
	(req, res, next) => middlewares.checkToken(req, res, next),
	(req, res) => createOrderController.exec(req, res)
)
export { orderRoutes };