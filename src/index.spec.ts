import { expect, it } from "vitest";

it("should log and mismatch message", () => {
  const message = "hello world!";
  expect(message).toBe("hello world!");
});
