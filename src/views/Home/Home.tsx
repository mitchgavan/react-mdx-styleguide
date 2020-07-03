/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Theme } from '../../theme/theme';

const Home = () => {
  return (
    <div
      css={(theme: Theme) => ({
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
      <Link
        to="/styleguide"
        css={(theme: Theme) => ({ color: theme.colors.primary })}
      >
        View Style Guide
      </Link>
    </div>
  );
};

export default Home;
