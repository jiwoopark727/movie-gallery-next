'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();

  return (
    <div>
      <span>Movie Gallery</span>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
            {path === '/' ? '🚗' : ''}
          </li>
          <li>
            <Link href='/about-us'>About Us</Link>
            {path === '/about-us' ? '🚗' : ''}
          </li>
        </ul>
      </nav>
    </div>
  );
}
