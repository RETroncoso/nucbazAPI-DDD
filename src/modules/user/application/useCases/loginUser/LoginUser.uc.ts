import { Result } from "../../../../../shared/core/Result";
import { Password } from "../../../domain/entities/Password";
import { IUserRepository } from "../../../domain/repositories/user.repo";
import { IAuthService } from "../../../services/auth.service";
import { AuthService } from "../../../services/impl/auth.service";
import { LoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
	constructor (private readonly repository: IUserRepository, private readonly authService: IAuthService) {}

	async exec (data: LoginUserDTO) {
		const { email, password } = data

		const userExists = await this.repository.exists(email)

		if (!userExists) {
			return Result.fail('El usuario no existe')
		}

		const user = await this.repository.getByEmail(email)

		const passwordMatch = await Password.compare(password, user!.password)

		if (!passwordMatch) {
			return Result.fail('Contraseña incorrecta')
		}

		const token = await this.authService.sign(user!.email)

		return Result.ok({
			user,
			token
		})
	}
}