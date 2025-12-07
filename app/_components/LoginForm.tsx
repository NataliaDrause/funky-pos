'use client';

import { useSearchParams } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { login } from '../actions';
import styles from './login.module.scss';

function LoginForm() {
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  return (
    <div className={styles.loginForm}>
      <h2>Log in to your account</h2>

      <form>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button
          formAction={login}
          className={styles.submitButton}
          disabled={pending}
        >
          {pending ? <span className={styles.inlineSpinner}></span> : 'Log in'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
