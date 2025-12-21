'use client';

import { type Menu } from '@korumite/kiwi/server';
import { useState } from 'react';

import { Drawer } from '@/components/Drawer';
import { Header } from '@/components/Header';
import { DrawerContext } from '@/contexts/DrawerContext';

type Props = {
  menu: Menu;
};

export const DrawerAndHeader = ({ menu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true),
      }}
    >
      <Drawer menu={menu} />
      <Header />
    </DrawerContext.Provider>
  );
};
