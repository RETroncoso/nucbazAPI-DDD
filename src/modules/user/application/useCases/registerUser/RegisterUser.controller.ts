import { Request, Response } from "express"
import { RegisterUserUseCase } from "./RegisterUser.uc"

export class RegisterUserController {
	constructor (private readonly useCase: RegisterUserUseCase) {}
	async exec (req: Request, res: Response) {
		const { nombre, email, password, rol } = req.body
		try {
			const user = await this.useCase.exec({ nombre, email, password, rol })
			return res.status(201).json(user)
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: 'Error al crear un usuario'
			})
		}
		
	}
}