import { Metadata } from 'next';
import styles from './page.module.scss';
import ProductsGrid from '../_components/ProductsGrid';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import Cart from '@/app/_components/Cart';
import { CartProvider } from '../_context/CartContext';

export const metadata: Metadata = {
  title: 'Point of Sale',
};

export default async function Home() {
  return (
    <CartProvider>
      <div className={styles.posContainer}>
        <section className={styles.productsSection}>
          <input
            type='text'
            placeholder='Search products...'
            className={styles.searchBar}
          />
          <Suspense fallback={<Spinner />}>
            <ProductsGrid />
          </Suspense>
        </section>
        <Cart />
      </div>
    </CartProvider>
  );
}
