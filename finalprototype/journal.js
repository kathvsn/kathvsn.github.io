// displays an appropriate greeting depending on the local time
function displayGreeting() {
  var greeting;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
  // returns hour for specified date according to the local time
  var time = new Date().getHours();

  // 00 - 11 (12 am to 11 am) morning
  if (time < 12){
    greeting = "good morning, kathy";
  }
  else if(time < 18){ // 12 - 17 (12 pm to 5 pm) afternoon
    greeting = "good afternoon, kathy";
  }
  else{ // 18 - 23 (6 pm to 11 pm) evening
    greeting = "good evening, kathy";
  }
  // set the greeting according to the time
  document.getElementById("greetingTitle").innerHTML = greeting;
}
// displays current date
function displayDateAndTime() {
  // retrieve date first
  var MDY = new Date();
  var m = MDY.getMonth();
  var month;
  var day = MDY.getDate();
  var year = MDY.getFullYear();

  // Begins with 0 so it goes from 0 - 11 for the months Jan - Dec
  if(m == 0){
    month = "January";
  }
  else if(m == 1){
    month = "February";
  }
  else if(m == 2){
    month = "March";
  }
  else if(m == 3){
    month = "April";
  }
  else if(m == 4){
    month = "May";
  }
  else if(m == 5){
    month = "June";
  }
  else if(m == 6){
    month = "July";
  }
  else if(m == 7){
    month = "August";
  }
  else if(m == 8){
    month = "September";
  }
  else if(m == 9){
    month = "October";
  }
  else if(m == 10){
    month = "November";
  }
  else if(m == 11){
    month = "December";
  }

  // retrieve local time
  var current = new Date();
  var hr = current.getHours();
  var min = current.getMinutes();
  min = checkTime(min);
  // display current month, day, year, hour and minute
  document.getElementById("dateTime").innerHTML = month + " " + day + ", " + year + " &#8212; " + hr + ":" + min;
  var t = setTimeout(displayDateAndTime, 500);
}

// checks time and adds 0 if time is less than 10
// ex) 10:09
function checkTime(x) {
  if (x < 10){
    x = "0" + x;
  }
  return x;
}

// change the color of the mood circle based on the color input value
// takes two arguments, the first id being the day and the second being the id of the color input
function changeMoodColor(elementId1, elementId2) {
  document.getElementById(elementId1).style.backgroundColor = document.getElementById(elementId2).value;
  setMoodColor()
}
