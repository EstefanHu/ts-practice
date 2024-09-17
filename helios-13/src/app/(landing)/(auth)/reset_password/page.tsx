import Link from 'next/link';
import ResetForm from './ResetForm';

export default function page() {
  return (
    <div>
      <h1>
        Reset <span>password</span>
      </h1>

      <ResetForm />

      <p>
        didn&apos;t reset password? <Link href='/login'>Sign in</Link>
      </p>
    </div>
  );
}
