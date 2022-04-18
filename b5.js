const arr = [0, 1, 2, 3, 4];

someAPICall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
};


// for loop
// có thể dùng break hoặc continue
// Các parameter là biến iterator, counter và incrementor.
// thực thi tốt với async/ await vì for loop là hàm sync
let countFor = 0;
asyncFor = async (items) => {
  for (item of items) {
    await someAPICall();
    countFor++;
  }
  console.log(countFor); // countFor = 5
};
asyncFor(arr);

// -------------------------------------------
// forEach
// không thể dùng từ khóa break hoặc continue vì forEach gọi các callback function
// Các parameter là biến iterator, index of item và array to iterate.
// giữ phạm vi của biến trong block
const num = 4;

arr.forEach((num) => {
  console.log(num);
}); // Result: 0 1 2
console.log(num); // Result: 4

// Không thích hợp với async/ await vì forEach là async nên không chờ asynchronous process trong callback
let count = 0;
hello = async (items) => {
  items.forEach(async () => {
    await someAPICall();
    count++;
  });
  console.log('count = ' + count); // count = 0 - expected: 5
};

hello(arr);
