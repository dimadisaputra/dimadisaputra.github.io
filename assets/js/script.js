// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


function showDropdown(){
  let responsive = document.getElementById("dropdown");
  let iconBar = document.getElementById("iconBars");
  
  if (responsive.className === "dropdown"){
    responsive.className += " responsive";  
    iconBar.className = "fas fa-times";
  }else{
    responsive.className = "dropdown";
    iconBar.className = "fas fa-bars";
  }
}

function closeDropdown(){
  let responsive = document.getElementById("dropdown");
  let iconBar = document.getElementById("iconBars");

  responsive.className = "dropdown";
  iconBar.className = "fas fa-bars";
}