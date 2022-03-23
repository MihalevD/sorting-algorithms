import { mark, pause, swap } from "./helpers";

export async function selectSort(array: any, speedValue: string) {
  for (let i = 0; i < array.length; i++) {
    let minInd = i;
    for (let j = i; j < array.length; j++) {
      await mark(j, array[j], "orange");
      await pause(Number(speedValue));
      if (array[j] < array[minInd]) {
        minInd = j;
      }
      await mark(j, array[j], "green");
    }
    await pause(Number(speedValue));
    await mark(minInd, array[minInd], "red");
    await mark(i, array[i], "red");
    await pause(Number(speedValue));
    await swap(array, i, minInd);
  }
  for (let index = 0; index < array.length; index++) {
    mark(index, array[index], "purple");
  }
  return array;
}
