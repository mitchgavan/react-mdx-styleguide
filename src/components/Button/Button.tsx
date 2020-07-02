/** @jsx jsx */
import { jsx } from '@emotion/core';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'secondary' | 'primary';
  color?: 'blue' | 'green' | 'red' | 'gray';
}

const Button = ({
  children,
  color = 'blue',
  variant = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      css={(theme) => ({
        background: theme.colors.primary,
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        padding: `${theme.space[2]} ${theme.space[3]}`,
        color: 'white',
        border: 0,
        borderRadius: theme.radii.md,
        cursor: 'pointer',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
