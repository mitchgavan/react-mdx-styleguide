/** @jsx jsx */
import { jsx } from '@emotion/core';
import { createContext, useContext, useState, useCallback } from 'react';

interface DropdownContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const context = createContext<DropdownContextProps | undefined>(undefined);

const DropdownProvider = context.Provider;

export const useDropdown = (): DropdownContextProps => {
  const dropdownContext = useContext(context);

  if (!dropdownContext) {
    throw new Error('useDropdown must be used within a Provider');
  }

  return dropdownContext;
};

interface DropdownProps {
  children: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
}

const Dropdown = ({ children, onClose, onOpen }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);

    if (onOpen) {
      onOpen();
    }
  }, [onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const context = {
    isOpen,
    open: handleOpen,
    close: handleClose,
  };

  return (
    <DropdownProvider value={context}>
      <div css={{ position: 'relative' }}>
        {typeof children === 'function' ? children({ isOpen }) : children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
