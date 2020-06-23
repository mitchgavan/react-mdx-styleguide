import React from 'react';

const Text: React.FC = ({ children, ...props }) => {
  return (
    <div
      css={(theme) => ({
        margin: 0,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Text;
