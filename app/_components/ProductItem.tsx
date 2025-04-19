'use client';

import Image from 'next/image';
import { Product } from '../_types/product';
import styles from './productItem.module.scss';
import { useCart } from '../_context/CartContext';

function ProductItem({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div
      key={product.id}
      className={styles.productCard}
      onClick={handleClick}
    >
      <div className={styles.productImage}>
        <Image
          fill
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>${product.regular_price.toFixed(2)}</p>
    </div>
  );
}

export default ProductItem;
