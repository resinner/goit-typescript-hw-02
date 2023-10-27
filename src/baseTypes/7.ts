/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sunday = 'weekand',
  Monday = 'workday',
  Tuesday = 'workday',
  Wednesday = 'workday',
  Thursday = 'workday',
  Friday = 'workday',
  Saturday = 'weekand',
}

function isWeekend(day: Days): boolean {

  if (day === "weekand") {
    return true;
  }
 else {
    return false;
  }
}

console.log(isWeekend(Days.Sunday));     //true;
console.log(isWeekend(Days.Monday));     //false;
console.log(isWeekend(Days.Tuesday));    //false;
console.log(isWeekend(Days.Wednesday));  //false;
console.log(isWeekend(Days.Thursday));   //false;
console.log(isWeekend(Days.Friday));     //false;
console.log(isWeekend(Days.Saturday));   //true;

//Не перевіряти через ChatGPT - відповідь сервісу не вірна.