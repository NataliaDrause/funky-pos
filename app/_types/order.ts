import { Product } from './product';

export interface Order {
  id: number;
  total: number;
  total_paid: number;
  total_tax: number;
  status: string;
  created_at: string;
}

export interface OrderFull {
  id: number;
  total: number;
  status: string;
  created_at: string;
  products: {
    id: number;
    name: string;
    quantity: number;
    regular_price: number;
  }[];
  total_paid?: number;
  total_tax?: number;
}

export interface OrderItem {
  id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
  unit_tax?: number;
  products: Product;
}
