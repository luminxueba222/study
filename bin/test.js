//1)  get 方法  当 输入 get({a:1},a) 输出 1 输入 get({a:{b:2}},a.b) 输出 2
//2） 深克隆
//3)  数组扁平化
let obj = {
    x:1,
    a: {
        y:2,
        b: { c: 3 }
    }
}
//1.先判断 obj[data]  是不是 输出  不是递归查找
// function get(obj, data) {
//     if (obj[data]) {
//          return obj[data]
//     }
//     for (let key in obj) {
//         if (typeof obj[data]==='object'|| typeof obj[key] === 'object') {
//             data = data.slice(2)
//             return  get(obj[key],data)
//         } 
// }
// }

//2） 深克隆
var arr=[1,2,{b:3,c:{d:4}}]
function deepClone(obj) {
    let res = Array.isArray(obj) ? [] : {}
    console.log(res, 'a.y', obj)
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            res[key] = deepClone(obj[key])
        } else {
            res[key]=obj[key]
        }
    }
    console.log(res, 'return', obj)
    return res
    
}
// let obj2 = deepClone(arr)
// obj.x=2
// obj.a.y=4

// arr[2]=1
// arr[1]=3
// console.log(obj2,arr)

var arr = [1, [2], [3, [4, 5]], [6, 7, [8, [9, [10, [11]]]]]]

//法1
// let ary = arr.flat(Infinity)
// console.log(ary)

//法2
function _flat() {
    let res = []
    return  function sum(data,num) {
        data.forEach(item => {
            if (Array.isArray(item)) {
                sum(item, num--)
            } else {
                res.push(item)
            }
        })
        return res
    }
}
console.log(_flat()(arr))