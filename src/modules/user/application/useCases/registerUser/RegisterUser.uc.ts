
import { Result } from "../../../../../shared/core/Result";
import { Password } from "../../../domain/entities/Password";
import Usuario from "../../../infra/db/user.model";
import { IUserRepository } from "../../../domain/repositories/user.repo";
import { RegisterUserDTO } from "./RegisterUserDTO";
import randomstring from "randomstring"
import { User } from "../../../domain/entities/User";

export class RegisterUserUseCase {
	constructor (private readonly repository: IUserRepository) {}

	async exec (data: RegisterUserDTO) {
		const { nombre, email, password, rol = 'user' } = data

		const alreadyExists = await this.repository.exists(email)

		if (alreadyExists) {
			return Result.fail('El usuario ya existe')
		}

		const newUser = User.create({ nombre, email, password, rol }).getValue()?.props


		const user = new Usuario(newUser)

		user.password = await new Password().hash(password)

		user.code = randomstring.generate(20)

		await this.repository.save(user)

		return Result.ok(user)
	}
}