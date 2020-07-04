import React from 'react';
import components from './config/components';
import CodeBlock from './components/CodeBlock/CodeBlock';
import Props from './components/Props/Props';

const styleGuideComponents = {};

components.forEach(({ name, path }) => {
  styleGuideComponents[name] = require(`../components/${path}.tsx`).default;
});

const mdxComponents = {
  ...styleGuideComponents,
  Props,
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock scope={styleGuideComponents} {...props} />,
};

export default mdxComponents;
