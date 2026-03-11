import { describe, it, expect } from "vitest";
import { add, greet } from "../src/index.js";

describe("greet function", () => {
  it("should greet", () => {
    expect(greet("Jasfer")).toBe("Hello, Jasfer!");
  });
});

describe("add function", () => {
  it("should add a and b", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("should handle negative numbers", () => {
    expect(add(20, -12)).toBe(8);
  });
});
