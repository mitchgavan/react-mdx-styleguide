/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Theme } from '../../theme/theme';
import components from '../config/components';

const Layout: React.FC = ({ children }) => {
  return (
    <div
      css={(theme: Theme) => ({
        flexDirection: 'column',
        minHeight: '100vh',
        display: 'flex',
      })}
    >
      <div
        css={(theme: Theme) => ({
          borderBottom: `1px solid #ddd`,
          padding: `${theme.space[3]} ${theme.space[4]}`,
        })}
      >
        <h1 css={(theme: Theme) => ({ fontSize: theme.fontSizes.xl })}>
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
          css={(theme: Theme) => ({
            flex: 1,
            minWidth: 0,
            padding: theme.space[4],
          })}
        >
          <div css={{ maxWidth: 800, margin: `0 auto 50px` }}>{children}</div>
        </div>
        <div
          css={(theme: Theme) => ({
            flexBasis: 'auto',
            '@media screen and (min-width: 40em)': {
              flexBasis: 240,
            },
            order: -1,
            borderRight: `1px solid #ddd`,
            padding: `${theme.space[3]} ${theme.space[4]}`,
          })}
        >
          <Link
            key={name}
            to={`/styleguide/theme`}
            css={(theme: Theme) => ({
              display: 'block',
              marginBottom: theme.space[4],
              textDecoration: 'none',
              color: 'inherit',
              ':hover': { color: theme.colors.primary },
            })}
          >
            Theme
          </Link>
          <div
            css={(theme: Theme) => ({
              textTransform: 'uppercase',
              fontWeight: 'bold',
              marginBottom: theme.space[2],
            })}
          >
            Components
          </div>
          {components
            .filter((component) => !component.hidden)
            .map(({ name }) => (
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
        &copy; {new Date().getFullYear()} My Company Name
      </div>
    </div>
  );
};

export default Layout;
