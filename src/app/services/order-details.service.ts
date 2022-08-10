import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  // fooddetails
  foodDetails = [
    {
	id:1,
	foodName: "Ore Chocolate Ice Cream",
	foodDetails: "Oreo ice cream",
	foodPrice: 3000,
	foodImg: "https://images.unsplash.com/photo-1565899947426-b2424039f921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
	id:2,
	foodName: "Pizza with tomato basil",
	foodDetails: "Pizza",
	foodPrice: 2000,
	foodImg: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80"
  },
  {
	id:3,
	foodName: "Full Grilled Chicken",
	foodDetails: "Grilled Chicken",
	foodPrice: 7000,
	foodImg: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW4lMjByaWNlJTIwYW5kJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
	id:4,
	foodName: "Fried Chicken and white rice",
	foodDetails: "Rice and chicken",
	foodPrice: 3950,
	foodImg: "https://previews.123rf.com/images/tehcheesiong/tehcheesiong1704/tehcheesiong170400002/75431619-fried-chicken-serve-with-white-rice.jpg"
  },
  {
	id:5,
	foodName: "Amala, Ewedu and Gbegiri",
	foodDetails: "Gbegiri and Ewedu",
	foodPrice: 2500,
	foodImg: "https://lagosbukagrillandbar.com/wp-content/uploads/2021/07/gbegiri.jpeg"
  },
  {
	id:6,
	foodName: "Masa with Miyan Taushe",
	foodDetails: "Masa",
	foodPrice: 4500,
	foodImg: "https://img-global.cpcdn.com/recipes/98a29df266886875/1200x630cq70/photo.jpg"
  }
]

}
