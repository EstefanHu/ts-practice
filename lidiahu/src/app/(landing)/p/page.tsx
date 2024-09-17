import Link from 'next/link';
import styles from './post.module.scss';

const POSTS = [
  {
    title: 'weathered basket',
    description: 'add description/synopsis here',
    category: 'short story',
    date: 'Tue Jul 25',
  },
  {
    title: 'extended peace',
    description: 'marie goes for a hike',
    category: 'short story',
    date: 'Mon Jun 19',
  },
];

export default function Posts() {
  return (
    <>
      {POSTS.map(({ title, description, category, date }) => (
        <Link key={title} href={`/p/${title.replace(' ', '-')}`}>
          <div className={styles.post}>
            <p className={styles.header}>
              <span>{category}</span> - {date}
            </p>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
