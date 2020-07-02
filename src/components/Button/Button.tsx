/** @jsx jsx */
import { jsx } from '@emotion/core';

interface ButtonProps {
  children: React.ReactNode;
  /**
   * The variant style
   */
  variant?: 'secondary' | 'primary';
  /**
   * The color of the button
   */
  color?: 'blue' | 'purple' | 'red';
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
        background:
          variant === 'secondary' ? 'transparent' : theme.colors[color],
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        padding: `${theme.space[2]} ${theme.space[3]}`,
        color:
          variant === 'secondary' ? theme.colors[color] : theme.colors.white,
        border: '2px solid',
        borderColor: theme.colors[color],
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
