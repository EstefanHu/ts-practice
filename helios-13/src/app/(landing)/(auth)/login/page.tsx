import Link from 'next/link';
import LoginForm from './LoginForm';

export default function page() {
  return (
    <div>
      <h1>
        Continue <span>story</span>
      </h1>

      <LoginForm />

      <p>
        don&apos;t have an account? <Link href='/register'>Sign up</Link>
      </p>

      <p>
        <Link href='/recover_account'>forgot password?</Link>
      </p>
    </div>
  );
}
