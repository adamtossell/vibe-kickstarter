import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'neutral-secondary' | 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    'primary': 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    'secondary': 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    'neutral-secondary': 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 