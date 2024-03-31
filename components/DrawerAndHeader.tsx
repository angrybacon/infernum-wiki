'use client';

import { useState, type FunctionComponent } from 'react';

import { Drawer } from '@/components/Drawer';
import { Header } from '@/components/Header';
import { DrawerContext } from '@/contexts/DrawerContext';

export const DrawerAndHeader: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true),
      }}
    >
      <Drawer />
      <Header />
    </DrawerContext.Provider>
  );
};
