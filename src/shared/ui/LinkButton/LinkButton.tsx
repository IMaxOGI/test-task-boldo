'use client';
import cn from 'classnames';
import React from 'react';
import s from './LinkButton.module.scss';
import Link, { LinkProps } from 'next/link';

interface LinkButtonProps extends LinkProps {
  className?: string;
  variant?: 'outlined-white' | 'outlined-blue' | 'filled-green' | 'filled-white';
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { className, variant, href, children, ...restProps } = props;

  return (
    <Link
      href={href}
      className={cn(s.LinkButton, s[`LinkButton--${variant}`], className)}
      {...restProps}
    >
      {children}
    </Link>
  );
};
