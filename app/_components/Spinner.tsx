import styles from './spinner.module.scss';
function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
