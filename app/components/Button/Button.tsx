import React from 'react';
import clsx from 'clsx';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode | React.ReactNode[];
} & JSX.IntrinsicElements['button'];

const getClassName = (variant: ButtonProps['variant'], className?: string) => {
  return clsx('text-sm font-small rounded-sm py-1 px-5 text-white', className, {
    'bg-green-100': variant === 'secondary',
    'bg-primary ': variant === 'primary',
  });
};

export const Button = ({ variant = 'primary', className, children, ...buttonProps }: ButtonProps) => {
  return (
    <button type="button" {...buttonProps} className={getClassName(variant, className)}>
      {children}
    </button>
  );
};
