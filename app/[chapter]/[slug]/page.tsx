import { join } from 'node:path';
import { makeToc, read } from '@korumite/kiwi/server';

import { BASE_URLS, CHAPTERS } from '@/app/constants';
import { Banner } from '@/components/Banner/Banner';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export const generateStaticParams = () => CHAPTERS.routes;

export default async function Chapter(context: {
  params: ReturnType<typeof generateStaticParams>[number];
}) {
  const { chapter, slug } = context.params;
  const crumbs = CHAPTERS.paths[chapter]?.[slug] || [];
  const { matter, minutes, text } = await read([BASE_URLS.CHAPTERS, ...crumbs]);
  const { banner, title } = matter;
  const { items: toc } = makeToc(text);
  try {
    if (!banner || typeof banner !== 'string') {
      throw new Error('Missing banner');
    }
    if (!title || typeof title !== 'string') {
      throw new Error('Missing title');
    }
    if (!toc?.length) {
      throw new Error('Could not parse table of contents');
    }
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
