import Navigation from '@/app/_components/Navigation';
import styles from './page.module.scss';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footer}>&copy; 2025 Funky POS</footer>
    </div>
  );
}

export default Layout;
