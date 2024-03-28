'use client';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';
import s from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  maxLength?: number;
  withHelperText?: boolean;
  numericOnly?: boolean;
  value?: string;
  error?: FieldError | string | null;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    label,
    maxLength,
    withHelperText = true,
    numericOnly = false,
    autoComplete = 'off',
    name,
    value,
    onChange,
    error,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (maxLength && newValue.length > maxLength) {
      newValue = newValue.slice(0, maxLength);
    }

    if (numericOnly && !/^(\+)?\d*$/.test(newValue)) {
      return;
    }

    setInputValue(newValue);
    onChange && onChange(event);
  };

  return (
    <div className={cn(s['Input'], className)}>
      {!!label && (
        <div className={s['Input__header']}>
          <label
            htmlFor={name}
            className={s['Input__label']}
          >
            {label}
          </label>
          {!!maxLength && (
            <span className={s['Input__character-counter']}>
              {!!value ? `${value.length}` : 0}/{maxLength}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(s['Input__field-wrapper'], {
          [s['Input__field-wrapper--error']]: error,
        })}
      >
        <input
          autoComplete={autoComplete}
          onChange={handleInputChange}
          value={inputValue}
          id={name}
          {...restProps}
          className={cn(s['Input__field'], {
            [s['Input__field--error']]: error,
          })}
        />
      </div>
      {withHelperText && error && (
        <p className={s['Input__helper-text']}>{typeof error === 'object' ? error.message : error}</p>
      )}
    </div>
  );
};
