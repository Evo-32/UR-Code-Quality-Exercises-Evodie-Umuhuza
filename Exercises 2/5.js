function calculateFactorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed");

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}