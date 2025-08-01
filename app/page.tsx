import styles from './page.module.scss';
import LoginForm from './_components/LoginForm';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoginForm />
      </main>
      <footer className={styles.footer}>
        <p>Copyright © 2025 Funky POS. All rights reserved.</p>
      </footer>
    </div>
  );
}
