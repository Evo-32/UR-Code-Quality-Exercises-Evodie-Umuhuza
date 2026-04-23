function calculateAverage(numbers) {
  if (!numbers.length) return undefined;

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}