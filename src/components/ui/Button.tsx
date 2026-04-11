import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-display font-medium text-sm transition-all duration-300 transform outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_4px_14px_0_rgba(47,107,60,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(47,107,60,0.5)] hover:bg-accent",
    secondary: "bg-white/60 backdrop-blur-md text-primary border border-primary/20 hover:-translate-y-0.5 hover:bg-primary hover:text-white",
    outline: "bg-transparent text-primary border border-primary hover:-translate-y-0.5 hover:bg-primary/5",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
