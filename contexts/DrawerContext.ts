'use client';

import { createContext } from 'react';

export const DrawerContext = createContext({
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
});
