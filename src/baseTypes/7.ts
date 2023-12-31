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

  return day === "weekand"
}