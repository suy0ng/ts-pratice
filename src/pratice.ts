// 예제 1
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

// Generic 사용
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

//Generic 사용 2
// function merge<A, B>(a: A, b: B): A & B {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });


// Generic 사용 3
function wrap<T>(param: T){
  return{
    param
  }
}

const wrapped = wrap(10);
