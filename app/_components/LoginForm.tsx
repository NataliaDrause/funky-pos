'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';
import { login } from '../_api/auth-service';

type LoginFormInputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setAuthError(null);

    try {
      await login(data.email, data.password);
      router.push('/pos');
    } catch (err) {
      setAuthError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Log in to your account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className={errors.email ? styles.error : ''}
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className={errors.password ? styles.error : ''}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        {authError && <p className={styles.error}>{authError}</p>}

        <button
          type='submit'
          disabled={loading}
          className={styles.submitButton}
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
