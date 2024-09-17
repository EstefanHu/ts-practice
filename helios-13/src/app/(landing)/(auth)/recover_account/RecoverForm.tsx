'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../layout.module.scss';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress';

const DEFAULT_DATA = {
  emailAddress: '',
};

export default function RecoverForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { emailAddress } = formData;
    const errors = {
      emailAddress: '',
      password: '',
    };

    if (!emailAddress) errors.emailAddress = 'email is requried';
    if (emailAddress && !ValidateEmailAddress(emailAddress)) errors.emailAddress = 'invalid email';

    setIsLoading(true);
    const { code, message } = await (
      await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    ).json();
    setIsLoading(false);

    if (code !== 201) return setErrorData({ emailAddress: message });

    router.push('/');
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleSignIn} className={styles.form}>
      <fieldset>
        <input
          type='email'
          placeholder='email address'
          value={formData.emailAddress}
          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
        />
        <p className={styles.error}>{errorData.emailAddress}</p>
      </fieldset>

      <input type='submit' className={styles.hidden} />

      <button onClick={handleSignIn} type='submit'>
        recover
      </button>
    </form>
  );
}
