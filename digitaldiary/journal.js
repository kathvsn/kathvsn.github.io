// displays an appropriate greeting depending on the local time
function displayGreeting() {
  var greeting;
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
  $(".photoLog").css("display", "contents");
  $(".settingSection").css("display", "none");
}

// displays setting page
function displaySettings(){
  hideJournal();
  $("#setBtn").css("backgroundColor", "#665755");
  $("#phtBtn").css("backgroundColor", "#93817d");
  $(".settingSection").css("display", "block");
  $(".photoLog").css("display", "none");
}

// displays main page
function displayMainPage(){
  showJournal();
  $("#jnlBtn").css("backgroundColor", "#665755");
  $("#phtBtn").css("backgroundColor", "#93817d");
  $("#setBtn").css("backgroundColor", "#93817d");
  $(".settingSection").css("display", "none");
  $(".photoLog").css("display", "none");
}

// change the color of the mood circle based on the color input value
// takes two arguments, the first id being the day and the second being the id of the color input
function changeMoodColor(elementId1, elementId2) {
  document.getElementById(elementId1).style.backgroundColor = document.getElementById(elementId2).value;
  var colArray = ["monMood", "tuesMood", "wedMood", "thursMood", "friMood", "satMood", "sunMood"];
  var colVal = document.getElementById(elementId2).value;
  for(var i = 0; i < 7; i++){
    if(elementId1 == colArray[i]){
      createCookie(colArray[i], colVal, 7);
      console.log(colArray[i]);
    }
  }
}

// saves and changes background color using cookies
function changeBgColor(elementId) {
  var color = document.getElementById(elementId).value;
  document.body.style.backgroundColor = color;
  createCookie("backgroundColor", color, 1);
}

// saves and changes text color using cookies
function changeTextColor(elementId) {
  var a = document.querySelectorAll("h1, h2, h3, p, legend");
  var color = document.getElementById(elementId).value;
  for (var i = 0; i < a.length; i++) {
    a[i].style.color = color;
  }
  createCookie("textColor", color, 1);
}

// saves and changes background color of daily affirmation message using cookies
function changeAffirmColor(elementId) {
  var color = document.getElementById(elementId).value;
  document.getElementById("affirm").style.backgroundColor = color;
  createCookie("aColor", color, 1);

}

// creates new cookie with a specified name, the value being stored and the num of days that the cookie will exist before being deleted
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

// reads in a cookie that is saved and returns value of a specified cookie
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }

  return null;
}

// erases a cookie by setting its value to empty and existing date to a negative value
function eraseCookie(name) {
  createCookie(name,"",-1);
}

// when the page loads it'll read the cookies for the background color and initialize it to any saved color input
var color = readCookie("backgroundColor");
if (color) {
  document.body.style.backgroundColor = color;
}

// when the page loads it'll read the cookies for the text color and initialize it to any saved color input
var t = document.querySelectorAll("h1, h2, h3, p, legend");
var txtColor = readCookie("textColor");
if (txtColor) {
  for (var i = 0; i < t.length; i++) {
    t[i].style.color = txtColor;
  }
}

// change the font
var changeFontStyle = function (font) {
  var a = document.querySelectorAll("h1, h2, h3, p, legend");
  var fontVal = font.value;
  for (var i = 0; i < a.length; i++) {
    a[i].style.fontFamily = fontVal;
  }
  createCookie("savedFont", fontVal, 1);
}

// when the page loads it'll read the cookies for the font style and initialize it to any saved font selection
var fontStyle = readCookie("savedFont");
if (fontStyle) {
  for (var i = 0; i < t.length; i++) {
    t[i].style.fontFamily = fontStyle;
  }
}

// reads cookie for affirmation background color and initializes it to a saved color input
var affirmationCol = readCookie("aColor");
if (affirmationCol) {
  document.getElementById("affirm").style.backgroundColor = affirmationCol;
}
var colArray = ["monMood", "tuesMood", "wedMood", "thursMood", "friMood", "satMood", "sunMood"];
var colorVal;
// reads cookie for each day of the mood tracker and initializes the color based on any saved cookies
// cookies expire within a week of their creation
for(var i = 0; i < 7; i++){
  colorVal = readCookie(colArray[i]);
  if (colorVal) {
    if(colArray[i] == "monMood"){
      document.getElementById('monMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "tuesMood"){
      document.getElementById('tuesMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "wedMood"){
      document.getElementById('wedMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "thursMood"){
      document.getElementById('thursMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "friMood"){
      document.getElementById('friMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "satMood"){
      document.getElementById('satMood').style.backgroundColor = colorVal;
    }
    if(colArray[i] == "sunMood"){
      document.getElementById('sunMood').style.backgroundColor = colorVal;
    }
  }
}


// when hovering on the color key, display the moods and colors associated with that mood
// a bit buggy when the screen is smaller and will not work that well with phones but it does the job
$(".colKey").hover(function(){
  $(".colorCode").css("display", "contents");
  },
  function(){
    $(".colorCode").css("display", "none");
  }
);

var placeholder = " ";
// if browser supports local storage implement the following function
if (window.localStorage) {
  // if keys are pressed, trigger a function to save input
  $('.toDoIn').keyup(function () {
    // set the textarea to be the input text
    localStorage.setItem(this.name, this.value);
  }).val(function () {
    // return saved textarea or leave the placeholder
    return localStorage.getItem(this.name) || placeholder;
  })
}
