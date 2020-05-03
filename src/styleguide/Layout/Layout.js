import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      css={(theme) => ({
        flexDirection: 'column',
        minHeight: '100vh',
        display: 'flex',
        fontFamily: theme.fonts.body,
        padding: theme.space[2],
      })}
    >
      <div>
        <h1>My Styleguide</h1>
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
          css={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {children}
        </div>
        <div
          css={{
            flexBasis: 'auto',
            '@media screen and (min-width: 40em)': {
              flexBasis: 64,
            },
            order: -1,
          }}
        >
          Nav
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Layout;
