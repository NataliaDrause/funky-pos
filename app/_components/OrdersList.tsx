import styles from './orders.module.scss';
import { Order } from '../_types/order';

export default function OrdersList({
  orders,
  onOrderClick,
}: {
  orders: Order[];
  onOrderClick: (orderId: number) => void;
}) {
  return (
    <div className={styles.ordersList}>
      {orders.map((order) => (
        <div
          key={order.id}
          className={styles.orderCard}
          onClick={() => onOrderClick(order.id)}
        >
          <p>
            <strong>Order #</strong>
            {order.id}
          </p>
          <p>
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Created At:</strong>{' '}
            {new Date(order.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
