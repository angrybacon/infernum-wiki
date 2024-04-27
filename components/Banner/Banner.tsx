import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { type FunctionComponent } from 'react';

import { BANNERS } from '@/components/Banner/banners';

type Props = { banner: string; title: string };

export const Banner: FunctionComponent<Props> = ({ banner, title }) => {
  const background = BANNERS[banner];
  if (!background) {
    throw new Error(
      `Missing banner "${banner}", got "${Object.keys(BANNERS)}"`,
    );
  }
  return (
    <Box
      sx={{
        alignItems: 'center',
        borderRadius: 4,
        display: 'flex',
        flexShrink: 0,
        height: { xs: 160, md: 250 },
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        img: {
          filter: 'blur(4px)',
          objectFit: 'cover',
          transform: 'scale(1.02)',
        },
      }}
    >
      <Image alt="Banner" fill placeholder="blur" priority src={background} />
      <Typography
        sx={{
          color: 'white',
          position: 'absolute',
          textAlign: 'center',
          textShadow: '0 0 8px black',
        }}
        variant="h1"
      >
        {title}
      </Typography>
    </Box>
  );
};
