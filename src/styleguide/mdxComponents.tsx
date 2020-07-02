import React from 'react';
import CodeBlock from './components/CodeBlock';
import components from './config/components';
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
