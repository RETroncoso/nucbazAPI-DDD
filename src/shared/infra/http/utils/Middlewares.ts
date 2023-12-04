import { NextFunction, Request, Response } from "express";
import { IAuthService } from "../../../../modules/order/services/auth.service";


export class Middlewares{
	constructor(private readonly authService: IAuthService){}

	private endRequest(status: 400 | 401 | 403, message: string, res: any): any {
		return res.status(status).send({ message })
	  }

	  public async checkToken(req: Request, res: Response, next: NextFunction) {
		const token = req.headers['x-token'] as string
	
		if (!token) {
		  return this.endRequest(403, 'No se envió el token', res)
		}
	
		const decoded = this.authService.decodeJWT(token)
	
		if (!decoded) {
		  return this.endRequest(403, 'Token inválido', res)
		}
		req.body.userMail = decoded
		next()
	  }
}