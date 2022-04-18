const numberOfOperations = 20;
const threhold = 5;

const listOfArguments = [];
const listOfDelays = [];

for (let i = 1; i <= numberOfOperations; i++) {
  listOfArguments.push(i)
  listOfDelays.push(Math.ceil(Math.random() * 9) * 1000)
}

const fakeAsyncOperation = (index) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Passed: " + index);
      resolve(index);
    }, listOfDelays[index]);
  })
}

async function runParralel2() {
  let result = new Array(listOfArguments.length);

  const argCopy = [...listOfArguments];
  const promises = new Array(threhold).fill(Promise.resolve())

  const chainNext = (p) => {
    if (argCopy.length) {
      const arg = argCopy.shift();

      return p.then(() => {
        const operationPromise = fakeAsyncOperation(arg).then((r) => result.push(r));
        return chainNext(operationPromise);
      })
    }
  }

  await Promise.all(promises.map(chainNext));
  return result;
}

runParralel2();

// async function runParralel() {
//   let result = [];
//   const batchCount = Math.ceil(numberOfOperations / threhold);

//   for (let i = 0; i < batchCount; i++) {
//     const batchStart = i * threhold;
//     const batchPromises = listOfArguments.slice(batchStart, batchStart + threhold);
//     const awaitedOperation = batchPromises.map(fakeAsyncOperation);

//     const batchResults = await Promise.all(awaitedOperation);
//     result = result.concat(batchResults);
//   }

//   return result;
// }
