import Logger from ".";

it("should log and mismatch message", () => {
  const message = "hello world!";
  expect(Logger.log(message)).toBe("hello world!");
});
