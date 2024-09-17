import Link from 'next/link';
import RecoverForm from './RecoverForm';

export default function page() {
  return (
    <div>
      <h1>
        Recover <span>:helios</span> account
      </h1>

      <RecoverForm />

      <p>
        don&apos;t have an account? <Link href='/register'>Sign up</Link>
      </p>
    </div>
  );
}
