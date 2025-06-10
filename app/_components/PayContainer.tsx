import { createOrder } from '../_api/data-service';
import { CartItem } from '../_types/product';
import styles from './pay.module.scss';

interface PayContainerProps {
  total: number;
  cart: CartItem[];
}

function PayContainer({ total, cart }: PayContainerProps) {
  const handlePayment = async (method: 'cash' | 'card') => {
    try {
      await createOrder({ total, cart, method });
      alert('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order.');
    }
  };

  return (
    <div className={styles.payContainer}>
      <button
        className={styles.payButton}
        onClick={() => handlePayment('cash')}
      >
        Pay with Cash
      </button>
      <button
        className={styles.payButton}
        onClick={() => handlePayment('card')}
      >
        Pay with Card
      </button>
    </div>
  );
}

export default PayContainer;
