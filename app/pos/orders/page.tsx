import { Metadata } from 'next';
import styles from './orders.module.scss';
import OrdersList from '@/app/_components/OrdersList';
import { getOrders } from '@/app/_api/data-service';
import { Order } from '@/app/_types/order';

export const metadata: Metadata = {
  title: 'Orders',
};

export default async function Page() {
  const orders: Order[] = await getOrders();
  return (
    <div className={styles.ordersContainer}>
      <OrdersList orders={orders} />

      <div className={styles.orderDetails}></div>
    </div>
  );
}
