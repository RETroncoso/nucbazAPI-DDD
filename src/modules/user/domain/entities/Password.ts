import bcryptjs from "bcryptjs"

export class Password {
	async hash (password: string) {
		const salt = bcryptjs.genSaltSync();

		const hashedPassword = bcryptjs.hashSync(password, salt);

		return hashedPassword;
	}

	static async compare (password: string, hashedPassword: string): Promise<boolean> {
		const comparedPassword = bcryptjs.compareSync(password, hashedPassword);

		return comparedPassword;
	}
}