import { getProducts } from '../_api/data-service';
import { Product } from '../_types/product';
import ProductItem from './ProductItem';
import styles from './productsGrid.module.scss';

async function ProductsGrid() {
  const products = await getProducts();

  return (
    <div className={styles.productsGrid}>
      {products.length > 0 &&
        products.map((product: Product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
}

export default ProductsGrid;
