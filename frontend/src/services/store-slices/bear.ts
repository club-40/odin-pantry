/**
 * THIS IS A DEMO
 */
import type { StateUnion, CreateSlice } from "@/hooks/useStore";

export interface BearSlice {
  bears: number;
  addBear: () => void;
}

export const createBearSlice: CreateSlice<BearSlice> = (set) => ({
  bears: 0,
  addBear: () =>
    set((state: StateUnion) => ({ ...state, bears: state.bears + 1 })),
});
