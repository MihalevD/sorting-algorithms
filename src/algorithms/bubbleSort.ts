export function bubbleSort(array: any) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let swap = array[j - 1];
        array[j - 1] = array[j];
        array[j] = swap;
      }
      continue;
    }
  }
}
