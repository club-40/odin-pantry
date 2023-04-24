### `/src/layouts`

This holds components is mainly intended to be a wrapper for each page. May contain anything necessary and used multiple times.

The `head` tags will need to be integrated. Look into pre-rendering them with vite-plugin-html or vite-plugin-ejs to prerender them. Helmet only changes those tags client-side.