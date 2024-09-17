import Link from 'next/link';
import RegisterForm from './RegisterForm';

export default function page() {
  return (
    <div>
      <h1>
        Join <span>:Helios</span>
      </h1>

      <RegisterForm />

      <p>
        Already have an account? <Link href='/login'>Sign in</Link>
      </p>
    </div>
  );
}
