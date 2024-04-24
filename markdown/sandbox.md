---
title: Sandbox
---

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

```md
![A large placeholder image](https://www.placehold.co/1600x200 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x100 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x50 'Low resolution')
```

![A large placeholder image](https://www.placehold.co/1600x200 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x100 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x50 'Low resolution')

## Typography

### Lists

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

### Paragraphs

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

### Quotes

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

### Spoilers

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

### Tables

#### Default Alignement

```md
| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |
```

| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |

#### Custom Alignement

<!-- prettier-ignore-start -->

```md
| One                         | Two              | Three                     |
| :-------------------------- | :--------------: | ------------------------: |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |
```

<!-- prettier-ignore-end -->

| One                         |       Two        |                     Three |
| :-------------------------- | :--------------: | ------------------------: |
| Morbi consectetur non velit |  Tempor a massa  |       Orci varius natoque |
| Sed pulvinar sapien in odio |  Cras nec nisl   |    Nascetur ridiculus mus |
| Quisque libero elit         | Aliquet sem vel  |      Quisque commodo urna |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |
