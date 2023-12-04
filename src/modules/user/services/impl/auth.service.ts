import jwt from 'jsonwebtoken';
import { IAuthService } from '../auth.service';

export class AuthService implements IAuthService {
	sign(id: string): string {
		return jwt.sign(id, process.env.CLAVESECRETA!, {

		})
	}
}