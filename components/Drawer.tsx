'use client';

import { type Menu } from '@korumite/kiwi/server';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Toolbar,
} from '@mui/material';
import NextLink from 'next/link';
import { Fragment, useContext, useState, type FunctionComponent } from 'react';

import { DrawerContext } from '@/contexts/DrawerContext';

const WIDTH = 240;

type Props = { menu: Menu };

export const Drawer: FunctionComponent<Props> = ({ menu }) => {
  const { isOpen, onClose } = useContext(DrawerContext);
  const [menuEntries, setMenuEntries] = useState<Record<string, boolean>>({});

  const handleClick = (chapter: string) => () =>
    setMenuEntries({ ...menuEntries, [chapter]: !menuEntries[chapter] });

  const drawer = (
    <>
      <Toolbar role="presentation" />
      <Divider />
      <List component="nav" sx={{ textTransform: 'capitalize' }}>
        {menu.map(([chapter, entries]) => (
          <Fragment key={chapter}>
            <ListItemButton onClick={handleClick(chapter)}>
              <ListItemText primary={chapter.replace('-', ' ')} />+
            </ListItemButton>
            <Collapse in={menuEntries[chapter]}>
              <Divider />
              <List
                component="div"
                dense
                sx={({ palette }) => ({
                  backgroundColor:
                    palette.mode === 'dark' ? 'common.black' : 'grey.50',
                })}
              >
                {entries.map(({ label, path }) => (
                  <ListItemButton component={NextLink} href={path} key={label}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                ))}
              </List>
              <Divider />
            </Collapse>
          </Fragment>
        ))}
      </List>
    </>
  );

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: { md: WIDTH } }}>
      <MuiDrawer
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
        open={isOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH },
        }}
        variant="temporary"
      >
        {drawer}
      </MuiDrawer>
      <MuiDrawer
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH },
        }}
        variant="permanent"
      >
        {drawer}
      </MuiDrawer>
    </Box>
  );
};
