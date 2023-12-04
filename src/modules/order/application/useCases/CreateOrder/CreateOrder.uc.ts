import { Result } from "../../../../../shared/core/Result";
import { UserRepository } from "../../../../user/infra/db/user.repo";
import { Order } from "../../../domain/entities/Order";
import { IOrderRepository } from "../../../domain/repositories/order.repo";
import OrderModel from "../../../infra/db/order.model";
import { CreateOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
	constructor(private readonly repository: IOrderRepository) {}


	async exec(data: CreateOrderDTO) {
		const { items, price, shippingCost, shippingDetails, total, userMail } = data

		const user = await new UserRepository().getByEmail(userMail)

		if (!user) {
			return Result.fail<Order>("El usuario no existe");
		}

		const orderToCreate = Order.create({ 
			items,
			price,
			shippingCost,
			shippingDetails,
			total,
			user: user._id!,
			createdAt: Date.now().toString(),
			status: 'pending'
		}).getValue()?.props

		const order = new OrderModel(orderToCreate)
		
		await this.repository.save(order)
	}
}