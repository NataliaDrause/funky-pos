import Link from 'next/link';
import styles from './navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faHouse,
  faReceipt,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { logout } from '../actions';

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src='/logo.png'
          width={40}
          height={40}
          alt='Logo'
        />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href='/pos'>
            <FontAwesomeIcon icon={faHouse} />
            <span className={styles.linkName}>Home</span>
          </Link>
        </li>
        <li>
          <Link href='/pos/orders'>
            <FontAwesomeIcon icon={faReceipt} />
            <span className={styles.linkName}>Orders</span>
          </Link>
        </li>
        <li>
          <Link href='/pos/settings'>
            <FontAwesomeIcon icon={faGear} />
            <span className={styles.linkName}>Settings</span>
          </Link>
        </li>
        <li>
          <form action={logout}>
            <button
              type='submit'
              className={styles.logoutButton}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className={styles.linkName}>Logout</span>
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
