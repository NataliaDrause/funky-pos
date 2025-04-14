import Image from 'next/image';
import { Product } from '../_types/product';
import styles from './productItem.module.scss';

// {
//   id: 28,
//   title: 'Ice Cream',
//   description: 'Creamy and delicious ice cream, available in various flavors for a delightful treat.',
//   category: 'groceries',
//   price: 5.49,
//   discountPercentage: 7.58,
//   rating: 3.77,
//   stock: 76,
//   tags: [Array],
//   sku: 'VEZMU1EQ',
//   weight: 5,
//   dimensions: [Object],
//   warrantyInformation: '2 year warranty',
//   shippingInformation: 'Ships in 2 weeks',
//   availabilityStatus: 'In Stock',
//   reviews: [Array],
//   returnPolicy: 'No return policy',
//   minimumOrderQuantity: 19,
//   meta: [Object],
//   images: [Array],
//   thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png'
// }

function ProductItem({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className={styles.productCard}
    >
      <div className={styles.productImage}>
        <Image
          fill
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductItem;
