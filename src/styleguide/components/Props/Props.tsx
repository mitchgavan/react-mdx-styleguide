import React from 'react';
// import { Table, td, th } from '../mdxComponents';
import components from '../../config/components';

interface Props {
  name: string;
}

const formatType = (tsType): string => tsType?.raw || tsType?.name || '';

const formatDefaultValue = (prop): string => {
  if (prop.defaultValue?.value) {
    return prop.defaultValue.value;
  }
  if (prop.required) {
    return 'required';
  }
  return '';
};

const Props: React.FC<Props> = ({ name }) => {
  const component = components.find((data) => data.name === name);

  if (!component) {
    return <p>Component not found.</p>;
  }

  // Load props documentation via custom webpack loader
  const {
    props,
  } = require(`!!./reactDocgenLoader!../../../components/${component.path}.tsx`);

  if (!props) {
    return <p>No props found for this component.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{formatType(props[key].tsType)}</td>
              <td>{formatDefaultValue(props[key])}</td>
              <td>{props[key].description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Props;
