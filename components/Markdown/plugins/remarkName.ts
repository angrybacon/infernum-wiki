import { hastify } from '@korumite/kiwi/client';
import { type Directives } from 'mdast-util-directive';
import { type Transformer } from 'unified';
import { type Node } from 'unist';
import { visit } from 'unist-util-visit';

/**
 * Augment the existing `Plugin` typing from `unified` so that the contained
 * transformer has to return the new expected node type.
 * This is useful in order to enforce that each user-defined plugin correctly
 * augment the main node with the new data.
 */
type Remarker<
  TOptions extends unknown[] = unknown[],
  TOutput extends object = object,
  TNode extends Node = Node,
> = (
  ...options: TOptions
) => (
  ...parameters: Parameters<Transformer<TNode, TNode & TOutput>>
) => (TNode & TOutput) | Promise<TNode & TOutput>;

/** Preliminary visit to mark directives by name for future remarkers. */
export const remarkName: Remarker = () => (tree) => {
  const tests = ['containerDirective', 'leafDirective', 'textDirective'];
  visit(tree, tests, (node) => {
    const directive = node as Directives;
    hastify(directive, {});
  });
  return tree;
};
