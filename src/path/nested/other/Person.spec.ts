import { expect, it } from "vitest";

import { Person } from "./Person";

it("person should say hello", () => {
  expect(new Person().sayHello("hello world!")).toBe("hello world!");
});
