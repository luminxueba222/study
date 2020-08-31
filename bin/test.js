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

// var arr = [1, [2], [3, [4, 5]], [6, 7, [8, [9, [10, [11]]]]]]

//法1
// let ary = arr.flat(Infinity)
// console.log(ary)

//法2
// function _flat() {
//     let res = []
//     return  function sum(data,num) {
//         data.forEach(item => {
//             if (Array.isArray(item)) {
//                 sum(item, num--)
//             } else {
//                 res.push(item)
//             }
//         })
//         return res
//     }
// }
// console.log(_flat()(arr))


//4  递归计算 任意正整数之间的和
// function sum(num) {
//     if (num < 1) return 0
//     return num+sum(--num)
// }
// console.log(sum(10))

//5  递归计算 任意正整数之间的乘积

// function sum(num) {
//     if (num < 1) return 1
//     return num * sum(--num)
// }
// console.log(sum(5))

//6 递归计算 100之间能同时被3和5整除的和

// function sum(num) {
//     if (num < 15) return 0
//     if (num % 3 === 0 && num % 5 === 0) {
//         return num+sum(--num)
//     }
//     return sum(--num)
// }
// console.log(sum(45))

//7 棋盘问题
// let n=0
// function sum(num) {
//     n++
//     if (n === num) return num*2
//     return 2 * n +sum(num)
// }
// console.log(sum(3))

//数组交集
var arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 1,8, 9];
// console.log(arr1.filter(item=>arr2.includes(item)))


//数组对象交集
// var arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
// arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
    
// console.log(arr1.filter(item=>arr2.includes(item)))
// var arr =[]
// arr1.forEach(item => {
//     arr2.forEach(crt => {
//         if (item.id === crt.id && item.name === crt.name) {
//             arr.push(item)
//         }
//     })
// })
// console.log(arr)


// let res = arr1.filter(item => {
//     return arr2.some(crt => JSON.stringify(item) === JSON.stringify(crt))
// })
// console.log(res)


//数组并集
// var arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 1, 8, 9];

var arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
var arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 },{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
// 1.
// console.log([...new Set(arr1.concat(arr2))])
//不能去重{}类型
//2.
// console.log(arr1.concat(arr2.filter(item=>!arr1.includes(item))))

//去重
// var res=[]
// arr2.forEach(item => {
//     !res.some(crt => JSON.stringify(item) === JSON.stringify(crt))&&res.push(item)
// })
// console.log(res)

var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(Math.max(...arr))
// console.log(Math.max.apply(null,arr))
// Math.max.apply(null, arr2.map(item => item.id))
    
// console.log(Math.max.apply(null, arr2.map(item => item.id)))
console.log(arr2.sort((a,b)=>b.id-a.id)[0])

console.log(arr1.reduce((prve, cur) => {
    return prve + cur.id
},0))