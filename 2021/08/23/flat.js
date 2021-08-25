const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string"];
let result = [];
function flat(arr) {
  if (Array.isArray(arr)) {
    for (let index = 0; index < arr.length; index++) {
      const ele = arr[index];
      if (Array.isArray(ele)) {
        result = flat(ele);
      } else {
        result.push(ele);
      }
    }
  } else {
    throw new Error("Must be Array ");
  }

  return result;
}

console.log("flat", flat(arr));
console.log("flat", arr.flat(Infinity));
