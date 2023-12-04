import  User  from "../../../user/infra/db/user.model";
import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories/order.repo";
import OrderModel, { IOrder } from "./order.model";

export class OrderRepository implements IOrderRepository {
	async save(order: IOrder) {
		const newOrder = new OrderModel(order)
		await newOrder.save()
	}

	async getByUser(userMail: string) {
		const user = await User.findOne({ email: userMail })
		const orders = await OrderModel.find({ user: user!._id })
		return orders
	}
}