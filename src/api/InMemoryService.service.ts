export class InMemoryService {
	
  createDb(): any {
    let cars = [
		{
		  "id": 1,
		  "name": "Rolls-Royce Phantom",
		  "type": "Super Fast Cars"
		},
		{
		  "id": 2,
		  "name": "Bentley Mulsanne",
		  "type": "Super Fast Cars"    },
		{
		  "id": 3,
		  "name": "BMW 7 Series",
		  "type": "Super Fast Cars"    },
		{
		  "id": 4,
		  "name": "Audi A8",
		  "type": "Super Fast Cars"    },
		{
		  "id": 5,
		  "name": "Bentley Bentayga",
		  "type": "Super Fast Cars"    },
		{
		  "id": 6,
		  "name": "Jaguar XJ",
		  "type": "Super Fast Cars"    },
		{
		  "id": 7,
		  "name": "Lexus LS",
		  "type": "Super Fast Cars"    
		}
    ];

    let products = [
	   {
		"productId": 1,
		"productName": "Leaf Rake",
		"price": 19.95,
		"imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
	  },
	  {
		"productId": 2,
		"productName": "Garden Cart",
		"price": 32.99,
		"imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
	  },
	  {
		"productId": 5,
		"productName": "Hammer",
		"price": 8.9,
		"imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
	  },
	  {
		"productId": 8,
		"productName": "Saw",
		"price": 11.55,
		"imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
	  },
	  {
		"productId": 10,
		"productName": "Video Game Controller",
		"price": 35.95,
		"imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
	  }
    ];

    return { cars, products };
  }
}