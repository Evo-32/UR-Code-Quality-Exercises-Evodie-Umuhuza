function calculateMatrixSum(matrix = []) {
  let sum = 0;

  for (const row of matrix) {
    for (const num of row) {
      sum += num;
    }
  }

  return sum;
}