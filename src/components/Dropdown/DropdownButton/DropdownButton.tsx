/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDropdown } from '../Dropdown';

interface DropdownButtonProps {
  children: React.ReactNode;
}

const DropdownButton = ({ children }: DropdownButtonProps) => {
  const { isOpen, close, open } = useDropdown();
  return (
    <button onClick={() => (isOpen ? close() : open())}>{children}</button>
  );
};

export default DropdownButton;
