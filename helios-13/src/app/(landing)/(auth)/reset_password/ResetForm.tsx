'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../layout.module.scss';

const DEFAULT_DATA = {
  password: '',
  confirmPassword: '',
};

export default function ResetForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { password, confirmPassword } = formData;
    const errors = {
      password: '',
      confirmPassword: '',
    };

    if (!password) errors.password = 'password is requried';
    if (!confirmPassword) errors.confirmPassword = 'confirm password is requried';
    if (password !== confirmPassword) errors.password = 'passwords do not match';

    setIsLoading(true);
    const { code, message } = await (
      await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    ).json();
    setIsLoading(false);

    if (code !== 201) return alert(message);

    router.push('/');
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleSignIn} className={styles.form}>
      <fieldset>
        <input
          type='password'
          placeholder='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <p className={styles.error}>{errorData.password}</p>

        <input
          type='password'
          placeholder='confirm password'
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        <p className={styles.error}>{errorData.confirmPassword}</p>
      </fieldset>

      <input type='submit' className={styles.hidden} />

      <button onClick={handleSignIn} type='submit'>
        recover
      </button>
    </form>
  );
}
