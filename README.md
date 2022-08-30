# Steps to reproduce

The Reproduction site is live at: https://6220119.github.io/nextjs-css-module-dynamic-import-bug/ <br>
at the time of writing, this issue is reproducible with `next@canary (12.2.6-canary.5)`

1. Load the [Home page (`/` route)](https://6220119.github.io/nextjs-css-module-dynamic-import-bug/).
2. Observe that the "Blue" and "Red" buttons are displayed correctly.
3. Click [Go to Contact page](https://6220119.github.io/nextjs-css-module-dynamic-import-bug/contact/).
4. Observe that the Contact page is displayed properly with the base (grey) button.
5. Click [Go to Home page](https://6220119.github.io/nextjs-css-module-dynamic-import-bug/).
6. ❌ `[FAIL]`, Expect that the "Blue" and "Red" buttons are displayed correctly.
    - Blue and Red buttons become "grey", due to CSS overriding from a newly added `<style>` element,<br>under the marker `<noscript data-n-css=""></noscript>`
---
> **Note** 
> - The issue doesn't happen if the Contact page is the first page loaded (at step 3, do a page refresh).
> - The issue also doesn't happen in local development (because `style-loader` is used in dev mode instead of `css-loader`)

## Video capture

https://user-images.githubusercontent.com/1059583/187365088-afe7065c-d6a9-4efa-a1d0-fe82c17b7029.mp4
