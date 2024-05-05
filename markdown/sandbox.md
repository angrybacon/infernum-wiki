---
title: Sandbox
---

Rather than having to maintain any additional guidelines, refer to the following
document in order to see how Markdown is rendered through the Wiki. It relies
directly on components implemented within the Wiki so that the preview is as
faithful as can be.

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
