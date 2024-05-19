import { join } from 'node:path';
import { makeMenu, makeNextRoutes, walk } from '@korumite/kiwi/server';

const trim = (text: string) => text.replace(/^\d+-/, '');

/**
 * List all path crumbs from the provided tree of files.
 * The output is a map of named route to crumb arrays for further reference.
 * More notably, crumbs correspond to the real file name including digit
 * prefixes and file extensions.
 */
const getPaths = (paths: string[][]) =>
  paths.reduce<Record<string, Record<string, string[]>>>(
    (accumulator, [realChapter, realSlug]) => {
      if (realChapter && realSlug) {
        const [chapter, slug] = [trim(realChapter), trim(realSlug)];
        const path = (accumulator[chapter] ??= {});
        path[slug] = [realChapter, `${realSlug}.md`];
      }
      return accumulator;
    },
    {},
  );

/** @deprecated Use `BASE_URLS` instead. */
const BASE_URL = join(process.cwd(), 'markdown');

export const BASE_URLS = {
  ROOT: BASE_URL,
  CHAPTERS: join(BASE_URL, 'chapters'),
};

const TREE = walk(BASE_URLS.CHAPTERS);

export const CHAPTERS = {
  menu: makeMenu(TREE as [chapter: string, slug: string][]),
  paths: getPaths(TREE),
  routes: makeNextRoutes(TREE, ['chapter', 'slug']),
} as const;
