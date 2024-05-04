import { makeToc, read } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/app/routes';
import { Banner } from '@/components/Banner/Banner';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export const generateStaticParams = () => CHAPTERS.routes;

export default function Chapter(context: {
  params: ReturnType<typeof generateStaticParams>[number];
}) {
  const { chapter, slug } = context.params;
  const path = CHAPTERS.paths[chapter]?.[slug];
  if (!path) return null;
  try {
    const { banner, minutes, text, title } = read(path);
    if (!banner) throw new Error('Missing banner');
    if (!title) throw new Error('Missing title');
    const { items: toc } = makeToc(text);
    if (!toc?.length) throw new Error('Could not parse TOC');
    return (
      <>
        <Banner banner={banner} minutes={minutes} title={title} />
        <Markdown markdown={text} />
        <Toc entries={toc} />
      </>
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    throw new Error(`${message} for "${path}"`);
  }
}
