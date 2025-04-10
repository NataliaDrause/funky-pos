import styles from './page.module.scss';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
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

  return (
    <div className={styles.posContainer}>
      <section className={styles.productsSection}>
        <input
          type='text'
          placeholder='Search products...'
          className={styles.searchBar}
        />
        <div className={styles.productsGrid}>
          {data.products.map((product: Product) => (
            <div
              key={product.id}
              className={styles.productCard}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.productImage}
              />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            </div>
          ))}
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
    </div>
  );
}
