import { read } from '@korumite/kiwi/server';

import { Markdown } from '@/components/Markdown/Markdown';

export default function License() {
  const { text, title } = read('license.md');
  return <Markdown markdown={text} title={title} />;
}
