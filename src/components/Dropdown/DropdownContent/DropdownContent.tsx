/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDropdown } from '../Dropdown';

interface DropdownContentProps {
  children: React.ReactNode;
}

const DropdownContent = ({ children }: DropdownContentProps) => {
  const { isOpen } = useDropdown();

  if (!isOpen) {
    return null;
  }

  return <div css={{ padding: 20 }}>{children}</div>;
};

export default DropdownContent;
