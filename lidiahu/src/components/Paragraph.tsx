import styles from './Paragraph.module.scss';

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.Paragraph}>{children}</p>;
}
