function myFunction(){
  var element = document.body;
  element.classList.toggle("dark-mode");}

  
//menu


function myMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}