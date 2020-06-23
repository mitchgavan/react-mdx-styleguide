/** @jsx jsx */
import { jsx } from '@emotion/core';
import Text from '../../components/Text/Text';
import components from '../components';
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
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
        <h1 css={(theme) => ({ fontSize: theme.fontSizes.xl })}>
          My Styleguide
        </h1>
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
          <div css={{ maxWidth: 800, margin: '0 auto' }}>{children}</div>
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
          <div
            css={(theme) => ({
              fontWeight: 'bold',
              marginBottom: theme.space[2],
            })}
          >
            Components
          </div>
          {components.map(({ name }) => (
            <Link
              key={name}
              to={`/styleguide/components/${name.toLowerCase()}`}
              css={(theme) => ({
                display: 'block',
                marginBottom: theme.space[2],
                color: 'inherit',
                textDecoration: 'none',
                ':hover': { color: theme.colors.primary },
              })}
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
