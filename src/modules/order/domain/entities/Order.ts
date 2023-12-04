import { Result } from "../../../../shared/core/Result";

interface ClassProps {
    price: number,
    shippingCost: number,
    total: number,
    shippingDetails: {
    	name: string,
		cellphone: string,
		location: string,
		address: string,
    },
	items: {
		desc: string,
		id: string,
		img: string,
		price: number,
		quantity: number,
		title: string
	} [],
	user: string,
	createdAt: string,
	status: string,
}

export class Order {
  public readonly props: ClassProps;

  constructor(props: ClassProps) {
	this.props = props;
  }

  public static create(props: ClassProps): Result<Order> {

	if (!props.price) {
	  return Result.fail<Order>("El precio no puede estar vacio");
	}
	
	if (!props.shippingCost) {
	  return Result.fail<Order>("El costo de envío no puede estar vacio");
	}

	if (!props.total) {
	  return Result.fail<Order>("El total no puede estar vacio");
	}

	if (!props.shippingDetails) {
	  return Result.fail<Order>("Los detalles de envío no pueden estar vacios");
	}

	if (!props.items) {
	  return Result.fail<Order>("Los items no pueden estar vacios");
	}

	if (!props.user) {
	  return Result.fail<Order>("El usuario no puede estar vacio");
	}

	if (!props.createdAt) {
	  return Result.fail<Order>("La fecha de creación no puede estar vacia");
	}

	if (!props.status) {
	  return Result.fail<Order>("El estado no puede estar vacio");
	}

	return Result.ok<Order>(new Order(props));
  }
}