//1)  get 方法  当 输入 get({a:1},a) 输出 1 输入 get({a:{b:2}},a.b) 输出 2

let obj = {
    x:1,
    a: {
        y:2,
        b: { c: 3 }
    }
}
//1.先判断 obj[data]  是不是 输出  不是递归查找
function get(obj, data) {
    if (obj[data]) {
         return obj[data]
    }
    for (let key in obj) {
        if (typeof obj[data]==='object'|| typeof obj[key] === 'object') {
            data = data.slice(2)
            return  get(obj[key],data)
        } 
}
}

console.log(get(obj,'a.y'))