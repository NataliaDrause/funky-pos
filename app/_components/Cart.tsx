'use client';

import { useCart } from '@/app/_context/CartContext';
import styles from './cart.module.scss';

function Cart() {
  const { cart, clearCart } = useCart();
  return (
    <section className={styles.cartContainer}>
      <div className={styles.cartList}>
        {cart.length > 0 &&
          cart.map((item, index) => (
            <div
              key={index}
              className={styles.cartItem}
            >
              {item.title} - ${item.regular_price.toFixed(2)}
            </div>
          ))}
      </div>
      <div className={styles.cartSummary}>
        <button className={styles.payButton}>Pay with Cash</button>
        <button className={styles.payButton}>Pay with Card</button>
        <button
          className={styles.clearCartButton}
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
