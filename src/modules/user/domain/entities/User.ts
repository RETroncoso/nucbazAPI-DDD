import { Result } from "../../../../shared/core/Result";

interface ClassProps {
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

export class User {
  public readonly props: ClassProps;

  constructor(props: ClassProps) {
	this.props = props;
  }

  public static create(props: ClassProps): Result<User> {

	if (!props.nombre) {
	  return Result.fail<User>("El nombre no puede estar vacio");
	}

	if (!props.email) {
	  return Result.fail<User>("El email no puede estar vacio");
	}

	if (!props.password) {
	  return Result.fail<User>("El password no puede estar vacio");
	}

	if (!props.rol) {
	  return Result.fail<User>("El rol no puede estar vacio");
	}

	return Result.ok<User>(new User(props));
  }
}