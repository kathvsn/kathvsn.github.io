var i = 0;
var head = "digital diary";
var dis = 0;
function printOut() {
  if (i < head.length) {
    document.getElementById("pitchTitle").innerHTML += head.charAt(i);
    i++;
    setTimeout(printOut, 100);
  }

  if(i == head.length){
    $("#pitchCaption").css("display", "block");
    $("#nextInsp").css("display", "block");
  }
}
