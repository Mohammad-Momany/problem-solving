// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let concat = [];
  array.forEach((num) => {
    if (
      concat.length === 0 ||
      concat[0].toString() === array.slice(size).toString()
    ) {
      slice = array.slice(0, size);
      concat.push(slice);
    } else if (concat.length > 0) {
      splice = array.splice(0, size);
      concat.push(splice);
    }
  });
  console.log(concat);
}

module.exports = chunk;
