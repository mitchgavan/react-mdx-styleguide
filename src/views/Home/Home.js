import React from 'react';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div
      css={(theme) => ({
        color: theme.space[4],
        fontFamily: theme.fonts.body,
        textAlign: 'center',
        maxWidth: '500px',
        margin: '0 auto',
      })}
    >
      <h1>My Home Page!</h1>
      <p>
        This is a sample app that includes a couple of components that will be
        included in the accompanying style guide.
      </p>
      <Button>Button</Button>
    </div>
  );
};

export default Home;
