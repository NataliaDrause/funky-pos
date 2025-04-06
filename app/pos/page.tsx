import Navigation from '../_components/Navigation';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navigation />
        <section className={styles.productsSection}>
          <input
            type='text'
            placeholder='Search products...'
            className={styles.searchBar}
          />
          <div className={styles.productsGrid}>
            {/* Product items will go here */}
          </div>
        </section>
        <section className={styles.cartSection}>
          <div className={styles.cartList}>{/* Cart items will go here */}</div>
          <div className={styles.cartSummary}>
            <button className={styles.payButton}>Pay with Cash</button>
            <button className={styles.payButton}>Pay with Card</button>
            <button className={styles.clearCartButton}>Clear Cart</button>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>&copy; 2025 Your Company</footer>
    </div>
  );
}
