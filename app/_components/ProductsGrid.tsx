import { Product } from '../_types/product';
import ProductItem from './ProductItem';
import styles from './productsGrid.module.scss';

async function ProductsGrid() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <div className={styles.productsGrid}>
      {data.products.map((product: Product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductsGrid;
