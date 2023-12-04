export interface CreateOrderDTO {
	userMail: string,
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
	} []
}