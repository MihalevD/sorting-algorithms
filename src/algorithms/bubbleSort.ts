export async function bubbleSort(array: any, speedValue: string) {
  for (let i = 0; i < array.length; i++) {
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
      } else {
        await mark(j, array[j], "green");
        await mark(j - 1, array[j - 1], "green");
      }
    }
  }
}

async function mark(
  position: number,
  number: number,
  color: string,
  offset?: number
) {
  if (offset) {
    for (let k = number; k < offset; k++) {
      var node = document.getElementById(`${k}-${position}`);
      node!!.style.background = "white";
    }
  } else {
    for (let k = 0; k < number; k++) {
      var nodeTwo = document.getElementById(`${k}-${position}`);
      nodeTwo!!.style.background = color;
    }
  }
}

async function pause(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
