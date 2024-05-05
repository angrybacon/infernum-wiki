---
title: Sandbox
---

## Preamble

Rather than having to maintain any additional guidelines, refer to the following
document in order to see how Markdown is rendered through the Wiki. It relies
directly on components implemented within the Wiki so that the preview is as
faithful as can be.

## General Markdown Conventions

In addition to `markdownlint` enforcing some basic rules, here are a few more
conventions:

- Fill your paragraphs to 80 columns
- If your title oppose to the above rule, think of a better heading for your
  document. In addition to annoy users with terminal-based clients, it also
  might not look that good either on the Wiki itself
- Heading levels start at 2 in order to account for the page title
- Don't use unicode quote characters eg. `‘’` and `“”`. They might not render
  properly for everyone so ASCII quotes should be preferred
- A colon right in front of a word will be interpreted as a Markdown /directive/
  so make sure you have a space right after `:` when it is used as punctuation
- A dot right after a number character ie. when you end your sentence with a
  digit, will sometimes render as a numbered list item. To avoid this behavior,
  escape the dot with a backslash: `Astarte is level 3\.`
- Depending on one's Markdown client, a dot at the end of a link can be
  considered part of said link eg. when you end your sentences with a link.
  Avoid bare links, wrap them with angled brackets `<` and `>`
- Order for links within the drawer comes from the number prefix in file names

## Code

````text
```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```
````

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

## Footnotes

Coming soon &trade;

## Frontmatter

The header of a Markdown document can be referred to as the _frontmatter_. It is
used to hold metadata for the current document without polluting its actual
content. The syntax is YAML.

- `authors`: (not used yet) Comma-separated list of usernames that should be
  credited for the current document
- `banner`: An upper snake case name to tell which banner should be used for the
  article. The list of supported banners can be found [here][banners].
- `title`: This title is used both in the drawer and at the top of the page.

[banners]: https://github.com/angrybacon/infernum-wiki/tree/master/components/Banner/banners

## Images

Prefer smaller images in resolution. Most users don't need a 4K screenshot of
the game. Make them as tall as you actually need but not taller since those
typically prevent users to read a page comfortably especially on mobile devices.

Both the accessible text (between square brackets) and the title (between single
quotes) are mandatory for a proper accessibility of your images within the page.

```md
![A large placeholder image](https://www.placehold.co/1600x200 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x100 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x50 'Low resolution')
```

![A large placeholder image](https://www.placehold.co/1600x200 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x100 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x50 'Low resolution')

## Links

Coming soon &trade;

## Lists

### Unordered Lists

```md
- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et `ipsum` consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est
```

- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et `ipsum` consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est

### Ordered Lists

```md
1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et `ipsum` consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est
```

1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et `ipsum` consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est

## Paragraphs

```md
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit `rutrum orci`, et congue sapien turpis quis purus.

Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur] pharetra
quam.
```

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit `rutrum orci`, et congue sapien turpis quis purus.

Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur] pharetra
quam.

## Quotes

```md
> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit `rutrum orci`, et congue sapien turpis quis purus.
>
> Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur]
> pharetra quam.
```

> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit `rutrum orci`, et congue sapien turpis quis purus.
>
> Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur]
> pharetra quam.

## Spoilers

Inline verbatim content is not supported within spoiler blocks.

```md
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit `rutrum orci`, et congue sapien turpis quis purus.

Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur] pharetra
quam.
:::
```

:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit `rutrum orci`, et congue sapien turpis quis purus.

Suspendisse ex ligula, elementum elementum arcu eu, :spoiler[efficitur] pharetra
quam.
:::

## Tables

The following items are not supported within tables:

- Merged cells
- Headless tables
- Multiline text within rows

### Default Alignement

```md
| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
```

| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |

### Custom Alignement

<!-- prettier-ignore-start -->

```md
| One                         | Two              | Three                     |
| :-------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
```

<!-- prettier-ignore-end -->

| One                         |       Two        |                     Three |
| :-------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  |      Quisque commodo urna |
| Morbi consectetur non velit |  Tempor a massa  |       Orci varius natoque |
| Sed pulvinar sapien in odio |  Cras nec nisl   |    Nascetur ridiculus mus |
