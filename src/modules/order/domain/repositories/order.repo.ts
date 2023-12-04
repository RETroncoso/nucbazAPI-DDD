import { IOrder } from "../../infra/db/order.model";

export interface IOrderRepository {
	save(order: IOrder): Promise<void>
	getByUser(userMail: string): Promise<IOrder[] | null>
}