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
