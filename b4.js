const waitBlocking = (miliSecond) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliSecond);
};

const waitNonBlocking = (miliSecond) => {
  return new Promise((resolve) => setTimeout(() => resolve()), miliSecond);
};

const controller1 = async (req, res) => {
  await waitBlocking(10000);
};

const controller2 = (req, res) => {
  waitBlocking(10000);
};

// Ở lần request đầu tiên thì thời gian nhận được response ở controller 1 là 40s
// Ở lần request đầu tiên thì controller 2 thì là 30s

// đề xuất cải thiện
const controller2Improve = (req, res) => {
  setImmediate(waitBlocking(10000));
};
