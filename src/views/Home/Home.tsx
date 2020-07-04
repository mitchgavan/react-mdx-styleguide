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
      <h1>React MDX Styleguide Demo</h1>
      <p>
        This is a sample app that includes a couple of components. These
        components are included in the accompanying style guide.
      </p>
      <p>
        It demonstrates how to add a style guide to a React codebase utilizing
        your existing tooling.
      </p>
      <Link
        to="/styleguide"
        css={(theme: Theme) => ({
          color: theme.colors.primary,
          fontSize: theme.fontSizes.lg,
        })}
      >
        View Style Guide
      </Link>
    </div>
  );
};

export default Home;
