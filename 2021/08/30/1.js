//EvenLoop
// console.log("script start");

// async function async1() {
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2 end");
// }
// async1();

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// console.log("script end");

//script start

//async2 end

//Promise

//script end

//async1 end
//promise1
//promise2
//setTimeout
//  10  11  5  6 1  2  9  3 4 7 8
setTimeout(() => {
  console.log(1);

  Promise.resolve().then(() => {
    console.log(2);
  });

  setTimeout(() => {
    console.log(3);

    Promise.resolve().then(() => {
      console.log(4);
    });
  }, 1500);
  Promise.resolve().then(() => {
    console.log(9);
  });
}, 2000);

Promise.resolve().then(() => {
  console.log(10);
  Promise.resolve().then(() => {
    console.log(11);
  });
});

setTimeout(() => {
  console.log(5);

  Promise.resolve().then(() => {
    console.log(6);
  });

  setTimeout(() => {
    console.log(7);

    Promise.resolve().then(() => {
      console.log(8);
    });
  }, 2500);
}, 1400);
console.log("start");

// start 10 11 5 6 1 2 9 3 4 7 8
//先执行主栈同步代码 start 执行完后会把 微任务放到微任务队列 宏任务放到宏任务队列 放完直接执行微任务把微任务执行完 10 11
//然后去宏任务队列中执行会读取宏任务队列中排在最前的一个任务 5 在把微任务队列执行完 6 然后去宏任务队列中执行会读取宏任务队列中排在最前的一个任务 1 微任务把微任务执行完 2 9
//然后去宏任务队列中执行会读取宏任务队列中排在最前的一个任务 3 微任务把微任务执行完4
//然后去宏任务队列中执行会读取宏任务队列中排在最前的一个任务7 微任务把微任务执行完8
//如此反复形成事件环
//栈 先进后去 函数调用 先执行最外层函数然后 销毁里->外层函数
//队列先进先出 [1,2,3] 先push 在shift
// node 11版本已经接近相同
// Node 端，microtask 在事件循环的各个阶段之间执行
// 浏览器端，microtask 在事件循环的 macrotask 执行完之后执行
