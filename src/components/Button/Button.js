import React from 'react';

const Button = ({ children, variant, as: Comp = 'button', ...props }) => {
  return (
    <Comp
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
    </Comp>
  );
};

export default Button;
