import toast from 'react-hot-toast';
import { createOrder } from '../_api/data-service';
import { useCart } from '../_context/CartContext';
import styles from './pay.module.scss';

function PayContainer() {
  const { clearCart, total, cart } = useCart();
  const handlePayment = async (method: 'cash' | 'card') => {
    try {
      await createOrder({ total, cart, method });
      clearCart();
      toast.success('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Failed to create order.');
      }
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
