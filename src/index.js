module.exports = function solveSudoku(matrix) {
  var matrixInLine = [];
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      matrixInLine.push(matrix[i][j]);
    }
  }
  // your solution
  takeNumber(0);
  return chunk_in_groups(matrixInLine);
  function takeNumber(index) {
    if (index >= matrixInLine.length) {
      return true;
    } else if (matrixInLine[index] != 0) {
      return takeNumber(index + 1);
    }

    for (var i = 1; i <= 9; i++) {
      if (checkNumber(i, Math.floor(index / 9), index % 9)) {
        matrixInLine[index] = i;
        if (takeNumber(index + 1)) {
          return true;
        }
      }
    }
    matrixInLine[index] = 0;
    return false;
  }
  function checkNumber(num, row, col) {
    for (var i = 0; i < 9; i++) {
      var b_index = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(col / 3) * 3) + (i % 3);
      if (num == matrixInLine[(row * 9) + i] || num == matrixInLine[col + (i * 9)] || num == matrixInLine[b_index]) {
        return false;
      }
    }
    return true;
  }
  function chunk_in_groups(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 9) {
      result.push(arr.slice(i, i + 9));
    }
    return result;
  }
}
