import { read } from '@korumite/kiwi/server';

import { Markdown } from '@/components/Markdown/Markdown';

export default function Home() {
  const { text } = read('welcome.md');
  return <Markdown markdown={text} />;
}
