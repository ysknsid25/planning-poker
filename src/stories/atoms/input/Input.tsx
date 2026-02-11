import React, { InputHTMLAttributes } from 'react';
import './input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional class name for custom styling
   */
  className?: string;
}

/**
 * Primary UI component for user input
 */
export const Input = ({
  className = '',
  ...props
}: InputProps) => {
  return (
    <input
      className={`storybook-input ${className}`}
      {...props}
    />
  );
};
