import ContactForm from './ContactForm';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <main className={styles.contactWrapper}>
      <div className={styles.contact}>
        <h1>get in touch</h1>

        <ContactForm />
      </div>
    </main>
  );
}
