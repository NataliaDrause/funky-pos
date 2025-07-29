'use client';

import { useCart } from '@/app/_context/CartContext';
import styles from './cart.module.scss';
import { CartItem } from '@/app/_types/product';
import Image from 'next/image';
import PayContainer from './PayContainer';

function Cart() {
  const {
    cart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
  } = useCart();
  return (
    <section className={styles.cartContainer}>
      <div className={styles.cartList}>
        {cart.length > 0 ? (
          cart.map((item: CartItem, index) => (
            <div
              key={index}
              className={styles.cartItem}
            >
              <div className={styles.cartItemImage}>
                <Image
                  fill
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className={styles.cartItemDetails}>
                <p className={styles.cartItemTitle}>{item.title}</p>
                <p className={styles.cartItemPrice}>
                  ${item.regular_price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className={styles.cartItemTotal}>
                <p>${(item.regular_price * item.quantity).toFixed(2)}</p>
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
        <div className={styles.totalSection}>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
        <PayContainer />
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
