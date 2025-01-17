import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
  type?: string;
  error?: FieldError;
  maxLength?: number;
}

function Input({ placeholder, register, type, error, maxLength }: InputProps) {
  const hasError = error && error.message;

  return (
    <>
      <input
        className={`${styles.input} ${hasError ? styles.error : ''}`}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        {...register}
      />
      {hasError && <p className={styles.warning}>{error.message}</p>}
    </>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  error: undefined,
  maxLength: undefined,
};

export default Input;
