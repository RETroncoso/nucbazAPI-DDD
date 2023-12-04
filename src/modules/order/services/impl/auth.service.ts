import jwt from 'jsonwebtoken';
import { IAuthService } from '../auth.service';

export class AuthService implements IAuthService {
	decodeJWT(token: string): { id: string } {
		return jwt.verify(token, process.env.CLAVESECRETA!) as { id: string }
	}
}