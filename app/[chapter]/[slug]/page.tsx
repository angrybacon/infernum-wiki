import { read } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/app/routes';
import { Banner } from '@/components/Banner/Banner';
import { Markdown } from '@/components/Markdown/Markdown';

export const generateStaticParams = () => CHAPTERS.routes;

export default function Chapter(context: {
  params: ReturnType<typeof generateStaticParams>[number];
}) {
  const { chapter, slug } = context.params;
  const path = CHAPTERS.paths[chapter]?.[slug];
  if (!path) return null;
  const { banner, text, title } = read(path);
  if (!banner) {
    throw new Error(`Missing banner for "${path}"`);
  }
  if (!title) {
    throw new Error(`Missing title for "${path}"`);
  }
  return (
    <>
      <Banner banner={banner} title={title} />
      <Markdown markdown={text} />
    </>
  );
}
