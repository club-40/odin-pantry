import {
  create,
  type StateCreator,
  type UseBoundStore,
  type StoreApi,
} from "zustand";

import { createBearSlice, type BearSlice } from "@/services/store-slices/bear";

export type StateUnion = BearSlice;

export type CreateSlice<T> = StateCreator<StateUnion, [], [], T>;

const useStoreBase = create<StateUnion>()((...all) => ({
  ...createBearSlice(...all),
}));

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  Object.keys(store.getState()).forEach((k) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store.use as any)[k] = () => {
      store((s) => s[k as keyof typeof s]);
    };
  });

  return store;
};

export const useStore = createSelectors(useStoreBase);
