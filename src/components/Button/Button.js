import React from 'react';

const Button = ({ children, variant, ...props }) => {
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
