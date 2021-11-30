let input = prompt(
  "Please enter a date in the format YYYY/MM/DD:",
  "Example : 2021/11/30"
);
let todayDate = new Date();
let inputDate = new Date(input);

function dateDifference(input) {
  return todayDate.getFullYear() - inputDate.getFullYear();
}

function checkMonthDay(difference) {
  if (
    inputDate.getMonth() > todayDate.getMonth() ||
    (inputDate.getMonth() === todayDate.getMonth() &&
      inputDate.getDate() > todayDate.getDate())
  ) {
    return (difference -= 1);
  } else {
    return difference;
  }
}
console.log(
  "The difference is " + checkMonthDay(dateDifference(input)) + " years"
);
