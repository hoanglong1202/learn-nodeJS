const controller = (lopp) => {
  console.log("start loop" + lopp);
  const arr = Array.from(Array(10).keys());

  asyncLoop(arr);

  console.log("end loop" + lopp);
}

function asyncLoop(arr) {
  return new Promise((res, rej) => {
    recursivelyAsyncLoop(arr, res).catch(rej);
  });
}

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