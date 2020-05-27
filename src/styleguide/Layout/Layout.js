import React from 'react';
import Text from '../../components/Text/Text';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const Layout = ({ children, components }) => {
  return (
    <div
      css={(theme) => ({
        flexDirection: 'column',
        minHeight: '100vh',
        display: 'flex',
      })}
    >
      <div
        css={(theme) => ({
          borderBottom: `1px solid #ddd`,
          padding: `${theme.space[3]} ${theme.space[4]}`,
        })}
      >
        <Text as="h1" css={(theme) => ({ fontSize: theme.fontSizes.xl })}>
          My Styleguide
        </Text>
      </div>
      <div
        css={{
          flex: 1,
          flexDirection: 'column',
          '@media screen and (min-width: 40em)': {
            flexDirection: 'row',
          },
          display: 'flex',
        }}
      >
        <div
          css={(theme) => ({
            flex: 1,
            minWidth: 0,
            padding: theme.space[4],
          })}
        >
          {children}
        </div>
        <div
          css={(theme) => ({
            flexBasis: 'auto',
            '@media screen and (min-width: 40em)': {
              flexBasis: 240,
            },
            order: -1,
            borderRight: `1px solid #ddd`,
            padding: `${theme.space[3]} ${theme.space[4]}`,
          })}
        >
          <Text>Components</Text>
          {components.map(({ name }) => (
            <Link
              key={name}
              to={`/styleguide/components/${name.toLowerCase()}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div
        css={(theme) => ({
          borderTop: `1px solid #ddd`,
          padding: `${theme.space[3]} ${theme.space[4]}`,
          textAlign: 'center',
          fontSize: theme.fontSizes.sm,
        })}
      >
        &copy; 2020 My Company Name
      </div>
    </div>
  );
};

export default Layout;
