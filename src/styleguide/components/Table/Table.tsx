/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Theme } from '../../../theme/theme';

const Table = (props) => {
  return (
    <div
      css={(theme: Theme) => ({
        overflowX: 'auto',
        border: `1px solid ${theme.colors.gray[200]}`,
        borderRadius: theme.radii.md,
      })}
    >
      <table
        css={(theme: Theme) => ({
          textAlign: 'left',
          my: theme.space[8],
          width: '100%',
          borderCollapse: 'collapse',
        })}
        {...props}
      />
    </div>
  );
};

export const TH = (props) => {
  return (
    <th
      css={(theme: Theme) => ({
        backgroundColor: theme.colors.gray[200],
        fontWeight: 'bold',
        padding: theme.space[2],
      })}
      {...props}
    />
  );
};

export const TD = (props) => {
  return (
    <td
      css={(theme: Theme) => ({
        borderTop: `1px solid ${theme.colors.gray[200]}`,
        whiteSpace: 'normal',
        padding: theme.space[2],
      })}
      {...props}
    />
  );
};

export default Table;
