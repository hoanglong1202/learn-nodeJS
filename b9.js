const a = Promise.resolve("resolve a");
const b = Promise.reject("reject b");
const c = Promise.resolve("resolve c");

Promise.all(
  [a, b, c].map((promise) => {
    return promise
      .then((res) => {
        return { value: res, status: "success" };
      })
      .catch((rej) => {
        return { value: rej, status: "fail" };
      });
  })
).then((res) => console.log(res));
