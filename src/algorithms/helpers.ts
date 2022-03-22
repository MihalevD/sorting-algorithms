export async function mark(
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

export async function pause(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
