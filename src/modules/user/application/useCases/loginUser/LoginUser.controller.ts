import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUser.uc";

export class LoginUserController {
	constructor (private readonly useCase: LoginUserUseCase) {}

	async exec (req: Request, res: Response) {
		const { email, password } = req.body
		try {
			const user = await this.useCase.exec({ email, password })
			return res.status(201).json(user)
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: 'Error al loguear un usuario'
			})
		}
	}
}