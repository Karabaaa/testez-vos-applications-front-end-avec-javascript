import { sayHello } from "./unit1";

describe("sayHello Unit Test Suite", () => {
  it("should return 'Hello, World' when no name is provided", () => {
    expect(sayHello()).toBe("Hello, World");
  });

  it("should return 'Hello, Alice' when name is 'Alice'", () => {
    expect(sayHello("Alice")).toBe("Hello, Alice");
  });
});
