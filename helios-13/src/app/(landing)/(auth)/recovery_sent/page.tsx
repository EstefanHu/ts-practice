import Link from 'next/link';

export default function page() {
  return (
    <div>
      <h1>Account recovery sent</h1>

      <p>
        <Link href='/'>Back to home</Link>
      </p>

      <p>
        Don&apos;t have an account? <Link href='/register'>Sign up</Link>
      </p>

      <p>
        Remember your password? <Link href='/login'>Sign in</Link>
      </p>
    </div>
  );
}
