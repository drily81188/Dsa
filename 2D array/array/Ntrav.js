// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// simple |Output
// 7 4 1 5 9 6 3

function nTraversal(matrix) {
  var bag = [];
  for (var i = matrix.length - 1; i >= 0; i--) {
    bag.push(matrix[i][0]);
  }
  for (var j = 1; j < matrix.length; j++) {
    bag.push(matrix[j][j]);
  }
  for (var k = matrix.length - 2; k >= 0; k--) {
    bag.push(matrix[k][matrix.length - 1]);
  }
  console.log(bag.join(" "));
}
