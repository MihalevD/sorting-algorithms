import { mark, pause, swap } from "./helpers";

async function partition(
  items: number[],
  left: number,
  right: number,
  speedValue: number
) {
  var pivotInd = Math.floor((right + left) / 2),
    i = left,
    j = right,
    pivot = items[Math.floor((right + left) / 2)];
  await mark(pivotInd, pivot, "yellow");
  while (i <= j) {
    while (items[i] < pivot) {
      if (i !== pivotInd) {
        await mark(i, items[i], "green");
      }
      i++;
      await pause(speedValue);
      await mark(i, items[i], "orange");
      await pause(speedValue);
    }
    while (items[j] > pivot) {
      if (j !== pivotInd) {
        await mark(j, items[j], "green");
      }
      j--;
      await pause(speedValue);
      await mark(j, items[j], "orange");
      await pause(speedValue);
    }
    if (i <= j) {
      await pause(speedValue);
      mark(i, items[i], "red");
      mark(j, items[j], "red");
      await pause(speedValue);
      swap(items, i, j);
      i++;
      j--;
    }
    mark(i, items[i], "green");
    mark(j, items[j], "green");
  }
  return i;
}

export async function quickSort(
  items: number[],
  left: number,
  right: number,
  speedValue: number
) {
  var index;
  if (items.length > 1) {
    index = await partition(items, left, right, speedValue);
    if (left < index - 1) {
      await quickSort(items, left, index - 1, speedValue);
    }
    if (index < right) {
      await quickSort(items, index, right, speedValue);
    }
  }
  return items;
}

export {};
