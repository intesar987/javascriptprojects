const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 100;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 4;
  } else if (day === "saturday") {
    return 3;
  } else if (day === "sunday") {
    return 2;
  }
};
//this part of the code tells me the amount of sleep I get on each individual day 

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

//this adds up all the data for each of the days 
console.log('You slept ' + getActualSleepHours() + ' hours');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
// this tells you the amount of ideal hours of sleep you should be getting
console.log('You should be getting ' + getIdealSleepHours() + ' hours.');

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return ("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    return ("You slept " + ( actualSleepHours - idealSleepHours) + " hours more than you should. Try to reduce the amount of sleep");
  } else if (actualSleepHours < idealSleepHours) {
    return 
      ("You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};
//this then calculates how many hours of sleep debt you are in. 
console.log(calculateSleepDebt());
