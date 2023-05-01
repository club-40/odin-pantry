### `src/services`

This holds most of the business logic relating to the client-side, that does not belong to react components/miscellaneous sections.

- `./queries`: Holds the logic for fetches and mutations for react-query hooks
- `./routing`: Holds routing logic for fs-based routing 
- `./store-slices`: Holds slices to the useStore global hook. Update `import`, `useStoreBase` and `StateUnion` when creating a new slice