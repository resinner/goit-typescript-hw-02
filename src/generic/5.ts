/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringKeyPair: KeyValuePair<string, number> = { key: "age", value: 30 };
const numberKeyPair: KeyValuePair<number, string> = { key: 1, value: "one" };
const booleanKeyPair: KeyValuePair<boolean, boolean> = { key: true, value: false, };

export {};