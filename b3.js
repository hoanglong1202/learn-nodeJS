// request 1 tầm 31s tiếp lần lượt 2, 3 là 32s, 33s
// trung bình tốn 32s

function asyncFunc(cb) {
  return new Promise((resolve) => {
    cb();
    resolve();
  });
}

const controller = async (req) => {
  // doA
  asyncFunc(doA)

  //doB
  await doB();
}
