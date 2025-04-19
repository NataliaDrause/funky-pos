export interface Product {
  id: number;
  title: string;
  regular_price: number;
  thumbnail: string;
}

export interface CartItem extends Product {
  quantity: number;
}
