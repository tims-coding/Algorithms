const array = [6, 22, 1, 13, 104, 6, 63, 39, 14, 70, 19, 2, 8, 45];

const len = array.length;

const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function bubbleSort(array) {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j + 1] < array[j]) {
        swap(j + 1, j, array);
      }
    }
  }
  return array;
}

console.log(bubbleSort(array));
