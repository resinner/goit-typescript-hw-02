/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<K, T>(objA: K, objB: T) {
  return Object.assign({}, objA, objB);
}

const result1 = merge({ a: 1 }, { b: 2 });
console.log(result1); // { a: 1, b: 2 }

const result2 = merge({ name: 'John' }, { age: 30 });
console.log(result2); // { name: 'John', age: 30 }

// export {}