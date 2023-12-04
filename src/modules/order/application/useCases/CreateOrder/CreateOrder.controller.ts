import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrder.uc";

export class CreateOrderController {
	constructor(private readonly useCase: CreateOrderUseCase) {}

	async exec(req: Request, res: Response) {
		const { items, price, shippingCost, shippingDetails, total, userMail } = req.body;
		try {
			await this.useCase.exec({ items, price, shippingCost, shippingDetails, total, userMail });
			return res.status(201).json({
				message: "Orden creada con éxito",
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: "Error al crear una orden",
			});
		}
	}

}