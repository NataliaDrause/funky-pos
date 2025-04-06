import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h2>Log in to your account</h2>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              Log in
            </a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copyright © 2025 Funky POS. All rights reserved.</p>
      </footer>
    </div>
  );
}
