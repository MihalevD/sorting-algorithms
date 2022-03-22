import { mark, pause } from "./helpers";

export async function bubbleSort(array: any, speedValue: string) {
  for (let i = 0; i < array.length; i++) {
    let swaps = 0;
    for (let j = array.length - 1; j > 0; j--) {
      await mark(j, array[j], "red");
      await mark(j - 1, array[j - 1], "red");
      await pause(Number(speedValue));
      if (array[j] < array[j - 1]) {
        let swap = array[j - 1];
        array[j - 1] = array[j];
        array[j] = swap;
        await mark(j, array[j], "green");
        await mark(j - 1, array[j - 1], "white", array[j]);
        swaps++;
      } else {
        await mark(j, array[j], "green");
        await mark(j - 1, array[j - 1], "green");
      }
    }
    if (swaps < 1) {
      for (let index = 0; index < array.length; index++) {
        mark(index, array[index], "purple");
      }
      break;
    }
  }
}
