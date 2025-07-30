import { OrderFull } from '../_types/order';
import styles from './orders.module.scss';

export default function OrderDetails({ order }: { order: OrderFull }) {
  return (
    <div className={styles.orderDetails}>
      <h2 className={styles.orderHeader}>Order #{order.id}</h2>
      <div className={styles.orderInfo}>
        <p>
          <strong>Created At:</strong>{' '}
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
        <p>
          <strong>Status:</strong> {order.status}
        </p>
      </div>
      {/* <h3 className={styles.productsHeader}>Products:</h3> */}
      <ul className={styles.productsList}>
        {order.products.map((product) => (
          <li
            className={styles.orderItem}
            key={product.id}
          >
            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{product.name}</p>
              <p className={styles.productPrice}>
                ${product.regular_price.toFixed(2)} x {product.quantity}
              </p>
            </div>
            <div className={styles.productTotal}>
              <p>${(product.regular_price * product.quantity).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <div>
          <p className={styles.totalTxt}>Total:</p>
        </div>
        <div>
          <p>
            <strong>${order.total.toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
