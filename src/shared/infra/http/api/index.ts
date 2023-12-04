import { Router } from "express";
import { userRoutes } from "../../../../modules/user/infra/http/user";
import { orderRoutes } from "../../../../modules/order/infra/http/order";


const router = Router();

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

export { router };