import { join } from 'node:path';
import { makeNextRoutes, walk } from '@korumite/kiwi/server';

const trim = (text: string) => text.replace(/^\d+-/, '');

const getPaths = (paths: string[][]) =>
  paths.reduce<Record<string, Record<string, string>>>(
    (accumulator, [realChapter, realSlug]) => {
      if (realChapter && realSlug) {
        const [chapter, slug] = [trim(realChapter), trim(realSlug)];
        accumulator[chapter] = accumulator[chapter] || {};
        accumulator[chapter]![slug] = `chapters/${realChapter}/${realSlug}.md`;
      }
      return accumulator;
    },
    {},
  );

const TREE = walk(join(process.cwd(), 'markdown', 'chapters'));

export const CHAPTERS = {
  paths: getPaths(TREE),
  routes: makeNextRoutes(TREE, ['chapter', 'slug']),
  tree: TREE as [chapter: string, slug: string][],
} as const;
