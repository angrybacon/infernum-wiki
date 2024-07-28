'use client';

import { type Menu } from '@korumite/kiwi/server';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Toolbar,
} from '@mui/material';
import NextLink from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import {
  Fragment,
  useContext,
  useEffect,
  useState,
  type FunctionComponent,
} from 'react';

import { DrawerContext } from '@/contexts/DrawerContext';

const WIDTH = 240;

type Props = { menu: Menu };

export const Drawer: FunctionComponent<Props> = ({ menu }) => {
  const { isOpen, onClose } = useContext(DrawerContext);
  const { chapter } = useParams();
  const pathname = usePathname();
  const [menuEntries, setMenuEntries] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // TODO This should be done on first render. This likely means we need a
    //      `DrawerEntry` child component for it.
    if (chapter && typeof chapter === 'string') {
      setMenuEntries({ ...menuEntries, [chapter]: true });
    }
  }, [chapter]);

  const handleClick = (chapter: string) => () =>
    setMenuEntries({ ...menuEntries, [chapter]: !menuEntries[chapter] });

  const drawer = (
    <>
      <Toolbar sx={{ px: { sm: 2 } }}>
        <Button href="/" size="small" variant="outlined">
          Solium Infernum
        </Button>
      </Toolbar>
      <Divider />
      <List component="nav" sx={{ textTransform: 'capitalize' }}>
        {menu.map(([chapter, entries]) => (
          <Fragment key={chapter}>
            <ListItemButton onClick={handleClick(chapter)}>
              <ListItemText primary={chapter.replace('-', ' ')} />
              <Box
                component={Icon}
                path={mdiChevronDown}
                rotate={menuEntries[chapter] ? -180 : 0}
                size={1}
                sx={({ transitions }) => ({
                  transition: transitions.create('transform'),
                })}
              />
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
                  <ListItemButton
                    component={NextLink}
                    href={path}
                    key={path}
                    onClick={onClose}
                    selected={path === pathname}
                  >
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
