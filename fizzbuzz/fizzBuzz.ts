export const fizzBuzz = (n: number) => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 5 === 0) return "Buzz";
  if (n % 3 === 0) return "Fizz";
  return n;
};
