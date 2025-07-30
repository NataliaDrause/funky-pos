import styles from './orders.module.scss';
import { Order } from '../_types/order';

export default function OrdersList({
  orders,
  onOrderClick,
  selectedOrderId = null,
}: {
  orders: Order[];
  onOrderClick: (orderId: number) => void;
  selectedOrderId?: number | null;
}) {
  return (
    <div className={styles.ordersTableWrapper}>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={selectedOrderId === order.id ? styles.selected : ''}
              onClick={() => onOrderClick(order.id)}
            >
              <td>{order.id}</td>
              <td>
                {new Date(order.created_at).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
                ,{' '}
                {new Date(order.created_at).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
