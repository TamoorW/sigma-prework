let input = prompt("Please enter an array:", "Example : 5,7,82,4").split(",");

function minMax(input) {
  input.sort(function (a, b) {
    return a - b;
  });
  return [input[0], input[input.length - 1]];
}

console.log(minMax(input));
