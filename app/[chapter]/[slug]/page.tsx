import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi/server';

import { BASE_URLS, CHAPTERS } from '@/app/constants';
import { Banner } from '@/components/Banner/Banner';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export const generateStaticParams = () => CHAPTERS.routes;

export default function Chapter(context: {
  params: ReturnType<typeof generateStaticParams>[number];
}) {
  const { chapter, slug } = context.params;
  const crumbs = CHAPTERS.paths[chapter]?.[slug] || [];
  const { banner, minutes, text, title } = read(BASE_URLS.CHAPTERS, ...crumbs);
  const { items: toc } = makeToc(text);
  try {
    if (!banner) throw new Error('Missing banner');
    if (!title) throw new Error('Missing title');
    if (!toc?.length) throw new Error('Could not parse table of contents');
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} for "${join(...crumbs)}"`);
  }
  return (
    <>
      <Banner banner={banner} minutes={minutes} title={title} />
      <Markdown markdown={text} />
      <Toc entries={toc} />
    </>
  );
}
