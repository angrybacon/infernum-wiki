import { join } from 'path';
import { readMarkdown } from '@korumite/kiwi';

export default async function Home() {
  const welcome = await getPartial('welcome.md');
  return <div>{welcome}</div>;
}
