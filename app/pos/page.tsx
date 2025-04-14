import { Metadata } from 'next';
import styles from './page.module.scss';
import ProductsGrid from '../_components/ProductsGrid';

export const metadata: Metadata = {
  title: 'Point of Sale',
};

export default async function Home() {
  return (
    <div className={styles.posContainer}>
      <section className={styles.productsSection}>
        <input
          type='text'
          placeholder='Search products...'
          className={styles.searchBar}
        />
        <ProductsGrid />
      </section>
      <section className={styles.cartSection}>
        <div className={styles.cartList}>{/* Cart items will go here */}</div>
        <div className={styles.cartSummary}>
          <button className={styles.payButton}>Pay with Cash</button>
          <button className={styles.payButton}>Pay with Card</button>
          <button className={styles.clearCartButton}>Clear Cart</button>
        </div>
      </section>
    </div>
  );
}
