const array = [6, 22, 1, 13, 104, 6, 63, 39, 14, 70, 19, 2, 8, 45];

const len = array.length;

const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function selectionSort(array) {
  for (let i = 0; i < len; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[smallestIdx]) {
        smallestIdx = j;
      }
    }
    if (i !== smallestIdx) {
      swap(i, smallestIdx, array);
    }
  }
  return array;
}

console.log(selectionSort(array));
