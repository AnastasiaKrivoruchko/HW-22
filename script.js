// Создать объект с такой структурой: 
// obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. 
// Функция должна вернуть новый объект вида:
// newObj = {
//   x: 20,
//   y: 20,
//   z: 30,
//   k: 23,
//   p: 13
// }

let obj = { 
  x: 10, 
  y: 20, 
  inner: { 
    x: 20, 
    z: 30 
  }, 
  foo2: { 
    k: 23, 
    p: 13 
  }, 
}

function convert(object) {
  const newObj = {};

  for(let key in object) {
    if(typeof object[key] === "object" && !Array.isArray(object[key])) {
      Object.assign(newObj, convert(object[key]));
    } else {
      newObj[key] = object[key];
    }
  }
  return newObj;
}

console.log(convert(obj));