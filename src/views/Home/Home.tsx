/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div
      css={(theme) => ({
        padding: theme.space[4],
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
      <Button onClick={() => console.log('fuck')}>View Style Guide</Button>
    </div>
  );
};

export default Home;
