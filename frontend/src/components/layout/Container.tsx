import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'nav' | 'header' | 'footer' | 'main';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  return (
    <Component
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
