setTimeout(() => {
  console.log("Hello event loop");
}, 0)

const miliseconds = Date.now();
while (true) {
  let currentSecond = Date.now();
  if (currentSecond - miliseconds >= 5000) {
    console.log("Out of 5 seconds");
    break;
  }
}