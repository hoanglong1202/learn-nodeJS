const controller = (lopp) => {
  console.log("start loop" + lopp);
  const arr = Array.from(Array(10).keys());

  asyncLoop(arr);

  console.log("end loop" + lopp);
}

// a promise-wrapper function so that it don't block the current stack
function asyncLoop(arr) {
  return new Promise((res, rej) => {
    recursivelyAsyncLoop(arr, res).catch(rej);
  });
}

// when event-loop finish its phases on the current iteration, it will call the passed function inside the setImmediate on its next iteration
async function recursivelyAsyncLoop(arr, resolve, i = 0) {
  if (i === arr.length) {
    resolve();
  } else {
    console.log(arr[i]);

    setImmediate(() => {
      recursivelyAsyncLoop(arr, resolve, ++i);
    });
  }
}

Promise.all[controller(1), controller(2), controller(3)]