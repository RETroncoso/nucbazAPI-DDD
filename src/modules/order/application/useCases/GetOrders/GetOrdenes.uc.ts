import { IOrderRepository } from "../../../domain/repositories/order.repo";
import { GetOrdenesDTO } from "./GetOrdenesDTO";

export class GetOrdenesUseCase {
	constructor(private readonly repository: IOrderRepository) {}
	
	async exec(data: GetOrdenesDTO) {
		const { userMail } = data		

		const orders = await this.repository.getByUser(userMail)

		return orders
	}

}