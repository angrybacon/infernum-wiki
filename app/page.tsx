import { read } from '@korumite/kiwi';

import { Markdown } from '@/components/Markdown/Markdown';

export default async function Home() {
  const { text } = read('welcome.md');
  return <Markdown markdown={text} />;
}
