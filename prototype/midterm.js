var x = document.getElementsByClassName("collapse");

for (var i = 0; i < x.length; i++) {
    x[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
  }
}
