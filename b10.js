async function waitAndMaybeReject() {
  await new Promise((r) => setTimeout(r, 5000));
  throw Error("This is an error");
}

async function test1() {
  try {
    return await waitAndMaybeReject();
  } catch (e) {
    return "Oh no!";
  }
}

async function test2() {
  try {
    return await waitAndMaybeReject();
  } catch (e) {
    throw e;
  }
}

async function test3() {
  return await waitAndMaybeReject();
}

async function test4() {
  return waitAndMaybeReject();
}

// const main = async () => {
//   const value = await test1();
//   console.log("value", value);
// };

// main();

console.log(test4());


// Cách 1 chạy được nhưng khi lỗi sẽ vào catch của hàm test1()
// vì return await tạo thêm 1 Promise Object nên lỗi sẽ throw của test1

// Cách 2 dư thừa việc throw e trong khi hàm waitAndMaybeReject đã throw rồi

// Cách 3 sẽ ko catch được lỗi vì ko dùng try catch
// vì return await tạo thêm 1 Promise Object
// nên nếu không dùng try/catch mà return await sẽ rất dư thừa

// Cách 4 chạy được và khi lỗi sẽ vào catch của hàm waitAndMaybeReject()
