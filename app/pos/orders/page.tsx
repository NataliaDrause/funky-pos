import { Metadata } from 'next';
import { getOrders } from '@/app/_api/data-service';
import { Order } from '@/app/_types/order';
import OrdersContainer from '@/app/_components/OrdersContainer';

export const metadata: Metadata = {
  title: 'Orders',
};

export default async function Page() {
  const orders: Order[] = await getOrders();

  return <OrdersContainer orders={orders} />;
}
