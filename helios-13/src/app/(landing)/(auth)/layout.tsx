import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './layout.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <header>
        <Link href='/'>
          <IoIosArrowBack className={styles.back} />
          :Helios
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
}
