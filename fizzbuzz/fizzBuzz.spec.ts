import { fizzBuzz } from "./fizzBuzz";

describe("Fizz Buzz", () => {
  it("returns Fizz for multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("returns Buzz for multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns FizzBuzz for multiple of 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("returns the number if is not a multiple of 5 or 3", () => {
    expect(fizzBuzz(13)).toBe(13);
    expect(fizzBuzz(22)).toBe(22);
  });
});
