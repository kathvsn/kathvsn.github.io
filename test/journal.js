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
  else if(time < 17){ // 12 - 16 (12 pm to 4 pm) afternoon
    greeting = "good afternoon, kathy";
  }
  else{ // 17 - 23 (5 pm to 11 pm) evening
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

// an array of 31 different daily affirmations
// a random message is displayed
function generateAffirmation(){
  var dailyMsgs = ["I am full of positive loving energy.","I deserve love and I get it in abundance.","I am loved, loving and lovable.","I am blessed with an incredible life.","I give out love and it is returned to me.",
  "I forgive myself and set myself free.", "I can be all that I want to be.", "I am becoming the best version of myself.", "I can create the life I desire.", "I am kind to myself.",
  "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and happy.", "My mind is calm and peaceful.", "I love myself.", "I am making smart choices.",
  "I deserve to be happy.", "Good things are happening.", "I am fulfilled by what I do.", "I am open to all that life offers me.", "I wish for constant prosperity.", "I will make the most of new opportunities.", "I am successful in whatever I do.",
   "I forgive myself.", "I can conquer my challenges.", "I attract the best in my life.", "I open my heart to receive good news.", "I deserve the good that comes my way.",
  "I am in charge of my life.", "I see the world with beauty and color."];

  var affirmToday = dailyMsgs[Math.floor(Math.random()*dailyMsgs.length)];
  // sets the affirmation message to be one of the messages in the array
  document.getElementById("affirm").innerHTML = affirmToday;
}

// generates a random song out of the 31 spotify links
function generateSong(){
  // all i did was copy the embedded link of the songs and placed them in the array
  // there is already an iframe in the html file with an empty src link
  var dailySong = ["https://open.spotify.com/embed/track/5mIOsPuQdXchVY0jB5NO9Q","https://open.spotify.com/embed/track/7tMrUK3uAXkTjcePX02WdC",
  "https://open.spotify.com/embed/track/58bFfMjShaACL6sAIR1Eyj", "https://open.spotify.com/embed/track/5yvhdo8FXbBsIllxv2Rr94",
  "https://open.spotify.com/embed/track/5MbJXPt3JRtQmMszcagFTV", "https://open.spotify.com/embed/track/78yeKzZVT9ARq9icCvEF3A",
  "https://open.spotify.com/embed/track/3xKsf9qdS1CyvXSMEid6g8", "https://open.spotify.com/embed/track/17YuXw2ScwLLL1sUrRKhoW",
  "https://open.spotify.com/embed/track/7rBP4bLjMLNkix1nGHjheP", "https://open.spotify.com/embed/track/4NFD9ea0uH0MtoC30yNYE1",
  "https://open.spotify.com/embed/track/7BoVAJ0HuKcBBRmUGlzX6o", "https://open.spotify.com/embed/track/63Ly2sEzloc9s0yAXlMi6r",
  "https://open.spotify.com/embed/track/4Sfa7hdVkqlM8UW5LsSY3F", "https://open.spotify.com/embed/track/1iAtzizV90sFq9oXw4zONM",
  "https://open.spotify.com/embed/track/13O36COxxWjcvc9r5Zsd1P", "https://open.spotify.com/embed/track/37IOMy7QvH4sjvctKVld88",
  "https://open.spotify.com/embed/track/5oO4wSJHdDMAtuHqpnNuwz", "https://open.spotify.com/embed/track/0TEekvXTomKt3hdXDZxxeW",
  "https://open.spotify.com/embed/track/5bJ1DrEM4hNCafcDd1oxHx", "https://open.spotify.com/embed/track/0SyY4pnirW6dDPMe32izRb",
  "https://open.spotify.com/embed/track/7yyJF1BYBaCifNmO1RGhv7", "https://open.spotify.com/embed/track/7zgabC90KSPZZwNjfZeTqo",
  "https://open.spotify.com/embed/track/14p5EKgbPx4U3P1j5JNHeh", "https://open.spotify.com/embed/track/3LjS1vGAprMNthdyue5XZD",
  "https://open.spotify.com/embed/track/57nReJa69S1lEJGYHLCKlx", "https://open.spotify.com/embed/track/5Xhsf1DLA9j2pVyCbqjkLh",
  "https://open.spotify.com/embed/track/1a0Mg4XPdt4EKsUz5beRZY", "https://open.spotify.com/embed/track/2yyluSgySg95O24RBkgrMR",
  "https://open.spotify.com/embed/track/5Ikz3bF0Iqgqiu2soUPr6X", "https://open.spotify.com/embed/track/0wEPue9rjGWgvRYNgvsUfw",
  "https://open.spotify.com/embed/track/1whfVLMKWqAX3uk97VXsNN"];
  var songFrames = document.getElementsByClassName('frame')[0];
  // gets a random number based on array length
  var songToday = Math.floor(Math.random()*dailySong.length);
  // takes the number and sets the link to be that element from the array
  var link = dailySong[songToday];
  // sets the iframe src to one of the embedded links in the array
  songFrames.src = link;
}

let mainBtn = document.querySelector('#jnlBtn');
let photoBtn = document.querySelector('#phtBtn');
let settingsBtn = document.querySelector('#setBtn');

mainBtn.addEventListener('click', displayMainPage);
photoBtn.addEventListener('click', displayPhotoLog);
settingsBtn.addEventListener('click', displaySettings);

// hides main page elements
function hideJournal(){
  $(".rowOne").css("display", "none");
  $(".row2").css("display", "none");
  $(".moodHorz").css("display", "none");
  $(".bujoRow1").css("display", "none");
  $("#jnlBtn").css("backgroundColor", "#93817d");
}

// displays main page elements
function showJournal(){
  $(".rowOne").css("display", "grid");
  $(".row2").css("display", "grid");
  $(".moodHorz").css("display", "flex");
  $(".bujoRow1").css("display", "grid");
}

// displays photo log page
function displayPhotoLog(){
  hideJournal();
  $("#phtBtn").css("backgroundColor", "#665755");
  $("#setBtn").css("backgroundColor", "#93817d");
  $(".settingSection").css("display", "none");
}

// displays setting page
function displaySettings(){
  hideJournal();
  $("#setBtn").css("backgroundColor", "#665755");
  $("#phtBtn").css("backgroundColor", "#93817d");
  $(".settingSection").css("display", "block");
}

// displays main page
function displayMainPage(){
  showJournal();
  $("#jnlBtn").css("backgroundColor", "#665755");
  $("#phtBtn").css("backgroundColor", "#93817d");
  $("#setBtn").css("backgroundColor", "#93817d");
  $(".settingSection").css("display", "none");
}

// saves and changes background color using cookies
function changeBgColor(elementId) {
  var color = document.getElementById(elementId).value;
  document.body.style.backgroundColor = color;
  createCookie("backgroundColor", color, 7);
}

function changeTextColor(elementId) {
  var color = document.getElementById(elementId).value;
  document.querySelector('h1').style.color = color;
  document.querySelector('h2').style.color = color;
  document.querySelector('h3').style.color = color;
  createCookie("textColor1", color, 7);
  createCookie("textColor2", color, 7);
  createCookie("textColor3", color, 7);
}

// change the color of the mood circle based on the color input value
// takes two arguments, the first id being the day and the second being the id of the color input
function changeMoodColor(elementId1, elementId2) {
  var color = document.getElementById(elementId2).value;
  document.getElementById(elementId1).style.backgroundColor = color;
  createCookie(elementId1, color, 7);
}

// how to create cookies using js!
// https://www.w3schools.com/js/js_cookies.asp
function createCookie(name, value, days) {
  if(days){
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else{
    var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
}

function readCookie(name) {
  var nameEQ = name + "=";
  var cookieSplit = document.cookie.split(';');
  for(var i = 0;i < cookieSplit.length;i++) {
    var c = cookieSplit[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }

  return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

// when page loads, read cookie to see previous saved data
var color = readCookie("backgroundColor");
var textCol1 = readCookie("textColor1");
var textCol2 = readCookie("textColor2");
var textCol3 = readCookie("textColor3");
if (color) {
  document.body.style.backgroundColor = color;
}

if (text1) {
  document.querySelector('h1').style.color = textCol1;
}

if (text2) {
  document.querySelector('h2').style.color = textCol2;
}

if (text3) {
  document.querySelector('h3').style.color = textCol3;
}
