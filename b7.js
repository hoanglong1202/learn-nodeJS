const controller = (lopp) => {
  console.log("start loop" + lopp);
  const arr = Array.from(Array(10).keys());

  asyncLoop(arr);

  console.log("end loop" + lopp);
}

// a promise-wrapper function để nó không block callstack
function asyncLoop(arr) {
  return new Promise((res, rej) => {
    recursivelyAsyncLoop(arr, res).catch(rej);
  });
}

// khi event-loop kết thúc vòng lặp, nó sẽ gọi function bên trong setImmediate vào vòng lặp kế
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