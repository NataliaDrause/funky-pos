'use client';

import { useCart } from '@/app/_context/CartContext';
import styles from './cart.module.scss';

function Cart() {
  const {
    cart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  return (
    <section className={styles.cartContainer}>
      <div className={styles.cartList}>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className={styles.cartItem}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <p className={styles.cartItemTitle}>{item.title}</p>
                <p className={styles.cartItemPrice}>
                  {item.regular_price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className={styles.cartItemTotal}>
                <p>{(item.regular_price * item.quantity).toFixed(2)}</p>
              </div>
              <div className={styles.cartItemActions}>
                <button
                  className={styles.quantityButton}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className={styles.quantityButton}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.emptyCartMessage}>Your cart is empty.</p>
        )}
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
