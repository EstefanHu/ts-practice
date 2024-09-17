import Link from 'next/link';
import styles from './layout.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.marketingLayout}>
      <header>
        <Link href='/' className={styles.logo}>
          :H<span>elios</span>
        </Link>

        <span>
          <Link href='/register' className={styles.register}>
            start writing
          </Link>
          <Link href='/login' className={styles.login}>
            sign in
          </Link>
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
}
