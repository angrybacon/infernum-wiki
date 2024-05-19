import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { type FunctionComponent } from 'react';

import { BANNERS } from '@/components/Banner/banners';

type Props = { banner: string; minutes: number; title: string };

export const Banner: FunctionComponent<Props> = ({
  banner,
  minutes,
  title,
}) => {
  const background = BANNERS[banner];
  if (!background) {
    throw new Error(
      `Missing banner "${banner}", did you forget to register it in "banners/index.ts"?`,
    );
  }
  return (
    <Box
      sx={{
        alignItems: 'center',
        borderRadius: 4,
        display: 'flex',
        flexShrink: 0,
        gridArea: 'banner',
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
          fontSize: { xs: 'h4.fontSize', md: 'h1.fontSize' },
        }}
        variant="h1"
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          bottom: 0,
          color: 'grey.50',
          mb: 1,
          mr: 2,
          position: 'absolute',
          right: 0,
          textShadow: '0 0 4px black',
        }}
      >
        Reading time: {minutes} {minutes === 1 ? 'minute' : 'minutes'}
      </Typography>
    </Box>
  );
};
