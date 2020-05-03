import React from 'react';

const Text = ({ children, as: Comp = 'div', ...props }) => {
  return (
    <Comp
      css={(theme) => ({
        margin: 0,
      })}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Text;
