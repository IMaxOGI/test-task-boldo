import React from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface ButtonPros extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'outlined-white' | 'outlined-blue' | 'filled-green' | 'filled-white' | 'filled-blue';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonPros> = (props) => {
  const { className, variant, children, ...restProps } = props;
  return (
    <button
      className={cn(s.Button, s[`Button--${variant}`], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
