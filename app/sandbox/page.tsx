import { read } from '@korumite/kiwi';

import { Markdown } from '@/components/Markdown/Markdown';

export default async function Sandbox() {
  const { text } = read('sandbox.md');
  return <Markdown markdown={text} />;
}
