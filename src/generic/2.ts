/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name?: string;
  position?: number;
  color?: string;
  weight?: number
}

function compare<K extends AllType, T extends AllType>(
  top: Pick<K, keyof AllType>,
  bottom: Pick<T, keyof AllType>,
  ): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const T = { name: "sring1", color: "sring2" };

const B = { position: 10, weight: 20 };

console.log(compare(T, B));

export {};