const array = [6, 22, 1, 13, 104, 6, 63, 39, 14, 70, 19, 2, 8, 45];

const len = array.length;

const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (const val of array.slice(0, array.length - 1)) {
    val < pivot ? leftArr.push(val) : rightArr.push(val);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(array));
