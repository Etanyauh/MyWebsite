function getSleepHours(day) {
  var hoursSlept = prompt('How many hours of sleep did you get? ');
  return Number(hoursSlept);
}

function getActualSleepHours() {
  var mondaySleep= getSleepHours();
  var tuesdaySleep= getSleepHours();
  var wednesdaySleep= getSleepHours();
  var thursdaySleep= getSleepHours();
  var fridaySleep= getSleepHours();
  var saturdaySleep= getSleepHours();
  var sundaySleep= getSleepHours();
  var result= mondaySleep + tuesdaySleep + wednesdaySleep + thursdaySleep + fridaySleep + saturdaySleep + sundaySleep;
  document.write('Total hours of sleep this week: ' + result);
  //return result;
}

getActualSleepHours();
