import Link from 'next/link';
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href='/pos'>Home</Link>
        </li>
        <li>
          <Link href='/pos/orders'>Orders</Link>
        </li>
        <li>
          <Link href='/pos/settings'>Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
