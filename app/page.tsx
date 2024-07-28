import { read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';

export default async function Home() {
  const { text } = await read([BASE_URLS.ROOT, 'welcome.md']);
  return <Markdown markdown={text} />;
}
