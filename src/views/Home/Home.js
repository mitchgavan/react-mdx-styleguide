import React from 'react';

const Home = () => {
  return (
    <div
      css={(theme) => ({
        color: theme.space[4],
        fontFamily: theme.fonts.body,
      })}
    >
      <h1>Hello Home!</h1>
    </div>
  );
};

export default Home;
