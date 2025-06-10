import styles from './pay.module.scss';

function PayContainer() {
  return (
    <div className={styles.payContainer}>
      <button className={styles.payButton}>Pay with Cash</button>
      <button className={styles.payButton}>Pay with Card</button>
    </div>
  );
}

export default PayContainer;
