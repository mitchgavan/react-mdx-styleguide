import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';

const CodeBlock = ({ children, className, live, render, scope }) => {
  const language = className.replace(/language-/, '');
  const theme = prismTheme;
  const liveProviderScope = { mdx, ...scope };

  if (live) {
    return (
      <div style={{ marginBottom: '40px' }}>
        <LiveProvider
          code={children.toString()}
          transformCode={(code) => `/** @jsx mdx */${code}`}
          scope={liveProviderScope}
          theme={theme}
        >
          <LivePreview />
          <LiveEditor style={{ marginTop: '20px', borderRadius: '4px' }} />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginBottom: '40px' }}>
        <LiveProvider
          code={children.toString()}
          theme={theme}
          scope={liveProviderScope}
        >
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.toString()}
      language={language}
      theme={theme}
    >
      {({
        className: preClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre
          className={preClassName}
          style={{ ...style, padding: '15px', borderRadius: '4px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
