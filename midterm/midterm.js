// gets elements that are tagged with the class "collapse"
var x = document.getElementsByClassName("collapse");

// x.length is basically number of elements tagged with the class "collapse"
// essentially the num of collapsible btns on a given page
// begins at 0 and ends x.length - 1
for (var i = 0; i < x.length; i++) {
  // x[i] is the current button being clicked
  // ex: x[0] on the issue page is the first button aka the toxic ingredients button
    x[i].onclick = function(){
      // assigns the element active class
      this.classList.toggle("active");
      // the nextElementSibling is the element following the collapse class
      // the next element is the "content" class which stores the paragraphs + imgs
      this.nextElementSibling.classList.toggle("show");
  }
}

// just to make sure i have the right num of buttons lol
console.log(x.length);
