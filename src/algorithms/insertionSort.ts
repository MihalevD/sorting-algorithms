import { mark, pause, swap } from "./helpers";

export async function insertionSort(array: any, speedValue: string) {
  for (let i = 0; i < array.length - 1; ++i) {
    let j = i;
    while (j >= 0 && array[j + 1] < array[j]) {
      await mark(j, array[j], "red");
      await mark(j + 1, array[j + 1], "red");
      await pause(Number(speedValue));
      await swap(array, j, j + 1);
      j--;
    }
  }
  for (let index = 0; index < array.length; index++) {
    mark(index, array[index], "purple");
  }
  return array;
}
