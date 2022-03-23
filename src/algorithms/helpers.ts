export async function mark(
  position: number,
  number: number,
  color: string,
  offset?: number
) {
  // console.log(`Coloring position : ${position} with ${number} color: ${color}`);
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

export async function pause(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export async function swap(array: number[], smaller: number, bigger: number) {
  // console.log(`switching color from ${smaller} to ${bigger}`);
  // console.log(`===================`);
  let temp = array[smaller];
  array[smaller] = array[bigger];
  array[bigger] = temp;
  await mark(bigger, array[bigger], "green");
  await mark(smaller, array[smaller], "white", array[bigger]);
  await mark(smaller, array[smaller], "green");
}
