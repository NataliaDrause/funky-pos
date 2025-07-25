import Link from 'next/link';
import styles from './navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHouse, faReceipt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

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
      </ul>
    </nav>
  );
}

export default Navigation;
