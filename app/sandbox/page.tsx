import { makeToc, read } from '@korumite/kiwi/server';

import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export default function Sandbox() {
  const { text, title } = read('sandbox.md');
  const { items: toc } = makeToc(text);
  if (!toc?.length) throw new Error(`Could not parse TOC`);
  return (
    <>
      <Markdown markdown={text} title={title} />
      <Toc entries={toc} />
    </>
  );
}
