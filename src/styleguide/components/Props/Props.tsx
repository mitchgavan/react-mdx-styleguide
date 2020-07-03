import React from 'react';
import Table, { TD, TH } from '../Table/Table';
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
    <Table>
      <thead>
        <tr>
          <TH>Name</TH>
          <TH>Type</TH>
          <TH>Default</TH>
          <TH>Description</TH>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <TD>{key}</TD>
              <TD>{formatType(props[key].tsType)}</TD>
              <TD>{formatDefaultValue(props[key])}</TD>
              <TD>{props[key].description}</TD>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Props;
