export default interface RootState {
  cart: {};
}

export interface IItem {
  id: number;
  count: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: [Object];
}

export interface IShopCartState {
  cartItems: IItem[];
}
