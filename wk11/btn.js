let notTheButton = document.querySelector('#first');
let dogButton = document.querySelector('#second');
let theButton = document.querySelector('#third');
let theDoc = document.querySelector('html');

notTheButton.addEventListener('click', showMessage);
dogButton.addEventListener('click', showDog);
theButton.addEventListener('click', theClick);

// first button doesnt do anything but show a message
function showMessage() {
  console.log("this is not the button lol");
  document.querySelector("#caption").innerHTML = "can you read? i said don't click on me!! i don't do anything >:[";
  document.querySelector("#bark").style.display = "none";
  //notTheButton.style.background = "grey";
  notTheButton.style.background = "linear-gradient(to right, #595959, #757474, #c6c6c6, #ffffff)";
  notTheButton.style.backgroundSize = "150% 150%";
  notTheButton.style.animation = "gradient 2.5s ease infinite";
  theDoc.style.background = "linear-gradient(to right, #e0bebc, #e2cbc9, #c6c6c6, #ffffff)";
  theDoc.style.backgroundSize = "150% 150%";
  theDoc.style.animation = "gradient 2.5s ease infinite";

}

// second but displays gif of the spinning chihuahua
function showDog(){
  console.log("spinning chihuahua goes brrr");
  document.querySelector("#caption").innerHTML = "i literally just said i'm not the button, but here is a spinning chihuahua <3";
  dogButton.style.background = "linear-gradient(to right, #595959, #757474, #c6c6c6, #ffffff)";
  dogButton.style.backgroundSize = "150% 150%";
  dogButton.style.animation = "gradient 2.5s ease infinite";
  document.querySelector("#bark").style.display = "block";
  theDoc.style.background = "linear-gradient(to right, #e2cbc9, #c4baba, #c6c6c6, #ffffff)";
  theDoc.style.backgroundSize = "150% 150%";
  theDoc.style.animation = "gradient 2.5s ease infinite";
}

// keeps track of how many times the actual history eraser button has been clicked
var count = 0;

// function to generate random links
function randomLinks(){
    // https://www.w3schools.com/js/js_math.asp
    // https://www.w3schools.com/js/js_random.asp
    // randomizes number and rounds it to the nearest integer
    // math.random() returns random num b/w 0 and 1; always less than 1
    let randomNum = Math.round(Math.random()*10);
    // 10 different links
    if (randomNum == 0){
      window.location = "http://www.staggeringbeauty.com/";
    }
    else if (randomNum == 1){
      window.location = "http://www.doughnutkitten.com/";
    }
    else if (randomNum == 2){
      window.location = "http://corndog.io/";
    }
    else if (randomNum == 3){
      window.location = "https://po.ta.to/";
    }
    else if (randomNum == 4){
      window.location = "https://cat-bounce.com/";
    }
    else if (randomNum == 5){
      window.location = "http://unicodesnowmanforyou.com/";
    }
    else if (randomNum == 6){
      window.location = "https://crouton.net/";
    }
    else if(randomNum == 7){
      window.location = "http://tencents.info/";
    }
    else if(randomNum == 8){
      window.location = "http://www.omfgdogs.com/#";
    }
    else if(randomNum == 9){
      window.location = "http://tacospin.com/";
    }
}

// the click function for THE button...
function theClick(){
  // increment count for each click of the history eraser button
  count++;
  console.log("omg you just clicked the button...");
  // change the text of the button after it is clicked the first time
  if(count == 1){
    document.querySelector("#third").innerHTML = "top secret";
  }
  document.querySelector("#caption").innerHTML = "I thought I said NOT to click the button... Well here's what you'll be erasing from history...";
  document.querySelector("#first").style.display = "none";
  document.querySelector("#second").style.display = "none";
  document.querySelector("#bark").style.display = "none";
  theButton.style.background = "red";
  theDoc.style.background = "linear-gradient(to right, #c6c6c6, #ffffff)";
  theDoc.style.backgroundSize = "150% 150%";
  theDoc.style.animation = "gradient 2.5s ease infinite";

  // second click triggers the random links
  if(count > 1){
    randomLinks();
  }
}
