const food = { corn: '🌽', bacon: '🥓' };

// Sử dụng Spread
const cloneFood = { ...food };

console.log(cloneFood); // { corn: '🌽', bacon: '🥓' }

// Sử dụng Object.assign
const cloneFood2 = Object.assign({}, food);

console.log(cloneFood2); // { corn: '🌽', bacon: '🥓' }

// Sử dụng JSON
const cloneFood3 = JSON.parse(JSON.stringify(food));

console.log(cloneFood3); // { corn: '🌽', bacon: '🥓' }

// Using created method
const cloneObject = (obj) => {
  let clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof obj[i] == 'object') {
      clone[i] = cloneObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

const cloneFood4 = cloneObject(food);
console.log(cloneFood4);


// Deep copy (sao chép sâu) tức là tạo mới một biến có cùng giá trị và được cắt đứt quan hệ hoàn toàn với biến được copy. 
//    => sửa biến mới ko đổi giá trị biến cũ
// Shallow copy có ý nghĩa rằng sau khi copy, biến mới hoặc các thành phần của biến mới vẫn còn quan hệ với biến ban đầu vì vẫn tham chiếu đến một đối tượng ban đầu 
//    => sửa biến mới có làm thay đổi giá trị biến cũ

// Không phải trường hợp nào cũng nên deep clone 
// Vì deep clone đôi khi bị miss  tham số, nêu tham số đó được gán underfined hoặc NaN...
console.log(JSON.parse(
  JSON.stringify({
    a: new Date(),
    b: NaN,
    c: new Function(),
    d: undefined,
    e: function () { },
    f: Number,
    g: false,
    h: Infinity
  })
))