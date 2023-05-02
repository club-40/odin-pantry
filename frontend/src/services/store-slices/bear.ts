/**
 * THIS IS A DEMO
 */
import type { StateUnion, CreateSlice } from "@/hooks/useStore";

export interface BearSlice {
  bears: number;
  addBear: () => void;
}

const INITIAL_BEAR_COUNT = 0;
const BEAR_INCREMENT = 1;

export const createBearSlice: CreateSlice<BearSlice> = (set) => ({
  bears: INITIAL_BEAR_COUNT,
  addBear: () =>
    set((state: StateUnion) => ({
      ...state,
      bears: state.bears + BEAR_INCREMENT,
    })),
});
