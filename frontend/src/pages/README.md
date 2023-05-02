### `/src/pages`

This is the main working directory that serves the file-based routing for the web app. A few terse examples should get the gist through.

The following examples are mapped like: `path` → `url`

- `src/pages/index.tsx` → `/`
- `src/pages/posts/index.tsx` → `/posts`
- `src/pages/posts/2022/index.tsx` → `/posts/2022`
- `src/pages/posts/[slug].tsx` → `/posts/:slug`
- `src/pages/posts/[slug]/tags.tsx` → `/posts/:slug/tags`
- `src/pages/posts/[...all].tsx` → `/posts/*`
- `src/pages/posts/(2022)/people.tsx` → `/posts/people`
- `src/pages/_ignored.tsx` ×

The rules, in general, are:

- Nested folders coalesce into nested paths
- `index.tsx` becomes the root of the path
- `[]` creates a slug
- `[...]` creates a catch all
- `()` - wrapped directories get the directory names removed from the path
- `_` prefixed to any page removes it
