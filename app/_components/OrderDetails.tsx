import { OrderFull } from '../_types/order';
import styles from './orders.module.scss';

export default function OrderDetails({ order }: { order: OrderFull }) {
  return (
    <div className={styles.orderDetails}>
      <h2 className={styles.orderHeader}>Order #{order.id}</h2>
      <div className={styles.orderInfo}>
        <p className={styles.orderTotal}>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </p>
        <p>
          <strong className={styles.orderStatus}>Status:</strong> {order.status}
        </p>
        <p>
          <strong className={styles.orderCreatedAt}>Created At:</strong>{' '}
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
        </p>
      </div>
      <h3 className={styles.productsHeader}>Products:</h3>
      <ul className={styles.productsList}>
        {order.products.map((product) => (
          <li
            className={styles.orderItem}
            key={product.id}
          >
            <span className={styles.productName}>{product.name}</span> -
            <span className={styles.productQuantity}>
              {' '}
              Quantity: {product.quantity}
            </span>
            ,
            <span className={styles.productPrice}>
              {' '}
              Price: ${product.regular_price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
