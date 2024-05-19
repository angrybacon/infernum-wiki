import { makeToc, read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export default function Sandbox() {
  const { text, title } = read(BASE_URLS.ROOT, 'sandbox.md');
  const { items: toc } = makeToc(text);
  if (!toc?.length) throw new Error(`Could not parse table of contents`);
  return (
    <>
      <Markdown markdown={text} title={title} />
      <Toc entries={toc} />
    </>
  );
}
