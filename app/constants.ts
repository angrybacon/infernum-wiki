import { join } from 'node:path';
import {
  makeMenu,
  makeNextRoutes,
  makePaths,
  walk,
} from '@korumite/kiwi/server';

/** @deprecated Use `BASE_URLS.ROOT` instead. */
const BASE_URL = join(process.cwd(), 'markdown');

export const BASE_URLS = {
  ROOT: BASE_URL,
  CHAPTERS: join(BASE_URL, 'chapters'),
};

const TREE = walk(BASE_URLS.CHAPTERS) as [chapter: string, slug: string][];

export const CHAPTERS = {
  menu: makeMenu(TREE),
  paths: makePaths(TREE),
  routes: makeNextRoutes(TREE, ['chapter', 'slug']),
} as const;
