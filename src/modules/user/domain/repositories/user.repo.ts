import { IUser } from "../../infra/db/user.model"

export interface IUserRepository {
	exists(email: string): Promise<boolean>
	save(user: IUser): Promise<void>
	getByEmail(email: string): Promise<IUser | null>
}