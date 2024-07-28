import { read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';

export default async function License() {
  const { matter, text } = await read([BASE_URLS.ROOT, 'license.md']);
  if (!matter.title || typeof matter.title !== 'string') {
    throw new Error('Missing title');
  }
  return <Markdown markdown={text} title={matter.title} />;
}
