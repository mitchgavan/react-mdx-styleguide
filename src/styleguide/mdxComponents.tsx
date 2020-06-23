import React from 'react';
import CodeBlock from './components/CodeBlock';
import components from './components';

const styleGuideComponents = {};

components.forEach(({ name, path }) => {
  styleGuideComponents[name] = require(`../components/${path}.tsx`).default;
});

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock scope={styleGuideComponents} {...props} />,
};

export default mdxComponents;
