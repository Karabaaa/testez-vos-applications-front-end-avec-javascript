import { isInTestEnv } from ".";

describe("isInTestEnv Uni Test Suites", () => {
  it("It should return true when I call isInTestEnv in test environment", () => {
    expect(isInTestEnv()).toBe(true);
  });
  it("It should return false when I call isInTestEnv in not a test environment", () => {
    process.env.NODE_ENV = "prod";
    expect(isInTestEnv()).not.toBe(true);
  });
});
