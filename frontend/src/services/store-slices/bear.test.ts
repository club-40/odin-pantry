import { test, expectTypeOf } from "vitest";

test("Test", () => {
  expectTypeOf(true).toBeBoolean;
});
