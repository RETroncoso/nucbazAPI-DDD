import { Request, Response } from "express";
import { GetOrdenesUseCase } from "./GetOrdenes.uc";

export class GetOrdenesController {
	constructor(private readonly useCase: GetOrdenesUseCase) {}
	
	async exec(req: Request, res: Response) {
		const { userMail } = req.body
		try {
			const orders = await this.useCase.exec({ userMail });
			return res.status(200).json({
				message: "Ordenes obtenidas con éxito",
				orders
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: "Error al obtener las ordenes",
			});
		}
	}
	
}