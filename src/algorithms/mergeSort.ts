import { mark, pause } from "./helpers";

export async function mergeSort(array: any, speedValue: string) {
  const newArray = await cutInHalf(array, speedValue, 0, array.length - 1);
  for (let index = 0; index < newArray.length; index++) {
    mark(index, newArray[index], "purple");
  }
}

export async function cutInHalf(
  array: any,
  speedValue: string,
  start: number,
  end: number
): Promise<any> {
  if (array.length < 2) {
    return array;
  }
  const newArray = [...array];
  const left = newArray.splice(0, array.length / 2);
  const leftIndex = Math.floor((start + end - 1) / 2);
  const rightIndex = Math.floor((start + end - 1) / 2) + 1;
  return await merge(
    await cutInHalf(left, speedValue, start, leftIndex),
    await cutInHalf(newArray, speedValue, rightIndex, end),
    speedValue,
    start,
    end
  );
}

async function merge(
  left: any,
  right: any,
  speed: any,
  start: number,
  end: number
) {
  let newArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }
  await pause(speed);
  const arrayBoc = [...newArray, ...left, ...right];
  await colorDiff(start, end, "red", arrayBoc);

  return [...newArray, ...left, ...right];
}

export async function colorDiff(
  positionStart: number,
  positionEnd: number,
  color: string,
  numbers: any
) {
  //   console.log(`${numbers}`);
  for (let k = positionStart; k <= positionEnd; k++) {
    // console.log(`${k - positionStart}`);
    await mark(k, 13, "white");
    await mark(k, numbers[k - positionStart], color);
  }
}
