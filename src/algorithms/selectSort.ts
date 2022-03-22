import { mark, pause } from "./helpers";

export async function selectSort(array: any, speedValue: string) {
  for (let i = 0; i < array.length; i++) {
    let minInd = i;
    for (let j = i; j < array.length; j++) {
      await mark(j, array[j], "orange");
      await pause(200);
      if (array[j] < array[minInd]) {
        minInd = j;
      }
      await mark(j, array[j], "green");
    }
    await pause(200);
    await mark(minInd, array[minInd], "red");
    await mark(i, array[i], "red");
    let swap = array[i];
    array[i] = array[minInd];
    array[minInd] = swap;
    await pause(200);
    await mark(minInd, array[minInd], "green");
    await mark(i, array[i], "white", array[minInd]);
    await mark(i, array[i], "green");
  }
  return array;
}
