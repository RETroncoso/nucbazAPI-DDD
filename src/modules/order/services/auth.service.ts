export interface IAuthService {
	decodeJWT(token: string): { id: string }
  }