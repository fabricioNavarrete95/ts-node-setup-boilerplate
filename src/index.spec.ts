import { expect, it } from "vitest";

import { Person } from "@/path/nested/other/Person";

it("should log and mismatch message", () => {
  const message = "hello world!";
  expect(new Person().sayHello(message)).toBe("hello world!");
});
