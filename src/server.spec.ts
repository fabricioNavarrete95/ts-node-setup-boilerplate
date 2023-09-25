import Logger from "./server";

it("should log and mismatch message", () => {
  const message = "hello world!";
  expect(Logger.log(message)).toBe("hello world!");
});
