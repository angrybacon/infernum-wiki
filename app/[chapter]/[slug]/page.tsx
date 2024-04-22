import { read } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/app/routes';
import { Markdown } from '@/components/Markdown/Markdown';

export const generateStaticParams = () => CHAPTERS.routes;

export default function Chapter(context: {
  params: ReturnType<typeof generateStaticParams>[number];
}) {
  const { chapter, slug } = context.params;
  const path = CHAPTERS.paths[chapter]?.[slug];
  if (!path) return null;
  const { text, title } = read(path);
  return <Markdown markdown={text} title={title} />;
}
