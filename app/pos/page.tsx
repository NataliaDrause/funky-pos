import { Metadata } from 'next';
import styles from './page.module.scss';
import ProductsGrid from '../_components/ProductsGrid';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import Cart from '@/app/_components/Cart';
import { CartProvider } from '../_context/CartContext';
import { Toaster } from 'react-hot-toast';

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
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'var(--button)',
              secondary: 'var(--text-invert)',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: 'var(--error)',
              secondary: 'var(--text-invert)',
            },
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            // backgroundColor: 'var(--primary-accent-light)',
            // color: 'var(--body-text)',
          },
        }}
      />
    </CartProvider>
  );
}
