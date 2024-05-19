import { read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';

export default function License() {
  const { text, title } = read(BASE_URLS.ROOT, 'license.md');
  return <Markdown markdown={text} title={title} />;
}
