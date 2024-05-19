import { read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';

export default function Home() {
  const { text } = read(BASE_URLS.ROOT, 'welcome.md');
  return <Markdown markdown={text} />;
}
