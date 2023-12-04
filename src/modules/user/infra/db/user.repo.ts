import Usuario, { IUser } from "./user.model";
import { IUserRepository } from "../../domain/repositories/user.repo";

export class UserRepository implements IUserRepository{
	async exists(email: string): Promise<boolean> {
		const alreadyExists = await Usuario.findOne({ email });
		
		return !!alreadyExists;
	}

	async save(user: IUser): Promise<void> {
		const nuevoUsuario = new Usuario(user);
		await nuevoUsuario.save();
	}

	async getByEmail(email: string): Promise<IUser | null> {
		const user = await Usuario.findOne({email});
		return user;
	}
}