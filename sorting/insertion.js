const array = [6, 22, 1, 13, 104, 6, 63, 39, 14, 70, 19, 2, 8, 45];

const len = array.length;

const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function insertionSort(array) {
  for (let i = 0; i < len; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j - 1, j, array);
      j--;
    }
  }
  return array;
}

console.log(insertionSort(array));
