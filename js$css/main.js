/* open and close nav*/

 function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginRight = "550px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  
}

function closeNav() {
	
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.body.style.backgroundColor = "white";
}