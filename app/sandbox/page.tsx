import { makeToc, read } from '@korumite/kiwi/server';

import { BASE_URLS } from '@/app/constants';
import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';

export default async function Sandbox() {
  const { matter, text } = await read([BASE_URLS.ROOT, 'sandbox.md']);
  if (!matter.title || typeof matter.title !== 'string') {
    throw new Error('Missing title');
  }
  const { items: toc } = makeToc(text);
  if (!toc?.length) {
    throw new Error('Could not parse table of contents');
  }
  return (
    <>
      <Markdown markdown={text} title={matter.title} />
      <Toc entries={toc} />
    </>
  );
}
